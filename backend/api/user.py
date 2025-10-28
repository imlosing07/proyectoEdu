from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from datetime import timedelta
from typing import List
from database.config import get_db
from database.database import User
from schemas.user import UserRegister, UserLogin, TokenResponse, PerfilResponse, MessageResponse
from core.user import (
    hash_password,
    validate_user_exists,
    authenticate_user,
    create_access_token,
    get_current_user,
    get_current_admin_user,
    ACCESS_TOKEN_EXPIRE_MINUTES
)

# Configuración del router
router = APIRouter(prefix="/users", tags=["Usuarios"])

# ==========================================
# ENDPOINTS
# ==========================================
@router.post("/register", response_model=MessageResponse, status_code=status.HTTP_201_CREATED)
def register(user_data: UserRegister, db: Session = Depends(get_db)):
    """
    ## Registro de usuarios
    
    Crea un nuevo usuario en el sistema.
    
    **Entrada:**
    - username: Nombre de usuario (mínimo 3 caracteres)
    - password: Contraseña (mínimo 6 caracteres)
    
    **Salida:**
    - mensaje: "registro completo"
    
    **Errores:**
    - 400: Usuario ya existe
    """
    # Verificar si el usuario ya existe
    if validate_user_exists(user_data.username, db):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="El usuario ya existe"
        )

    # Determinar si es el primer usuario registrado
    user_count = db.query(User).count()
    is_first_user = (user_count == 0)

    # Crear el nuevo usuario
    hashed_pwd = hash_password(user_data.password)
    new_user = User(
        username=user_data.username,
        password=hashed_pwd,
        admin=is_first_user,  # El primero será admin=True
        activo=True
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"mensaje": "registro completo"}


@router.post("/login", response_model=TokenResponse)
def login(user_data: UserLogin, db: Session = Depends(get_db)):
    """
    ## Login de usuarios
    
    Autentica un usuario y retorna un token JWT.
    
    **Entrada:**
    - username: Nombre de usuario
    - password: Contraseña
    
    **Salida:**
    - token: Token JWT de autenticación
    - token_type: Tipo de token (bearer)
    
    **Errores:**
    - 401: Credenciales incorrectas
    - 403: Usuario inactivo
    """
    # Autenticar usuario
    user = authenticate_user(user_data.username, user_data.password, db)
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Credenciales incorrectas",
            headers={"WWW-Authenticate": "Bearer"}
        )
    
    # Crear el token
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username, "admin": user.admin},
        expires_delta=access_token_expires
    )
    
    return {"token": access_token, "token_type": "bearer"}

@router.post("/perfil", response_model=PerfilResponse)
def get_perfil(current_user: User = Depends(get_current_user)):
    """
    ## Obtener perfil del usuario
    
    Retorna los datos del usuario autenticado mediante el token.
    
    **Entrada:**
    - token: Token JWT en el header Authorization (Bearer token)
    
    **Salida:**
    - username: Nombre de usuario
    - admin: Es administrador (True/False)
    - activo: Usuario activo (True/False)
    
    **Errores:**
    - 401: Token inválido o expirado
    - 403: Usuario inactivo
    """
    return {
        "username": current_user.username,
        "admin": current_user.admin,
        "activo": current_user.activo
    }

# ===========================
# ADMIN — LISTAR USUARIOS
# ===========================
@router.get("/admin/list", response_model=List[PerfilResponse])
def listar_usuarios(
    db: Session = Depends(get_db),
    current_admin: User = Depends(get_current_admin_user)
):
    """
    ## Listar todos los usuarios (solo admin)
    
    **Requiere:** Token de administrador en el header `Authorization: Bearer <token>`
    
    **Salida:**
    - Lista de usuarios con username, admin y activo
    """
    usuarios = db.query(User).all()
    return [
        {
            "username": u.username,
            "admin": u.admin,
            "activo": u.activo
        }
        for u in usuarios
    ]

# ===========================
# ADMIN — ELIMINAR USUARIO
# ===========================
@router.delete("/admin/delete/{username}", response_model=MessageResponse)
def eliminar_usuario(
    username: str,
    db: Session = Depends(get_db),
    current_admin: User = Depends(get_current_admin_user)
):
    """
    ## Eliminar un usuario por nombre de usuario (solo admin)
    
    **Requiere:** Token de administrador
    
    **Entrada:**
    - username: Nombre del usuario a eliminar
    
    **Salida:**
    - mensaje: "Usuario eliminado correctamente"
    """
    user = db.query(User).filter(User.username == username).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Usuario no encontrado"
        )

    if user.admin:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="No se puede eliminar otro administrador"
        )

    db.delete(user)
    db.commit()

    return {"mensaje": f"Usuario '{user.username}' eliminado correctamente"}

# Desactivar usuario (en lugar de eliminar)
@router.delete("/admin/desactivar/{username}", response_model=MessageResponse)
def desactivar_usuario(
    username: str,
    db: Session = Depends(get_db),
    current_admin: User = Depends(get_current_admin_user)
):
    """
    ## Desactivar un usuario (solo admin)
    
    **Entrada:**
    - username: Nombre del usuario a desactivar
    
    **Acción:** Pone activo=False en lugar de eliminar.
    """
    user = db.query(User).filter(User.username == username).first()
    if not user:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")

    if user.admin:
        raise HTTPException(status_code=403, detail="No se puede desactivar otro administrador")

    user.activo = False
    db.commit()
    db.refresh(user)

    return {"mensaje": f"Usuario '{user.username}' desactivado correctamente"}


# Dar permisos de administrador
@router.put("/admin/dar_admin/{username}", response_model=MessageResponse)
def dar_admin(
    username: str,
    db: Session = Depends(get_db),
    current_admin: User = Depends(get_current_admin_user)
):
    """
    ## Dar rol de administrador a un usuario (solo admin)
    """
    user = db.query(User).filter(User.username == username).first()
    if not user:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")

    if user.id == current_admin.id:
        raise HTTPException(status_code=403, detail="No puedes cambiar tu propio rol")

    if user.admin:
        raise HTTPException(status_code=400, detail="El usuario ya es administrador")

    user.admin = True
    db.commit()
    db.refresh(user)

    return {"mensaje": f"Usuario '{user.username}' ahora es administrador"}


# Quitar permisos de administrador
@router.put("/admin/quitar_admin/{username}", response_model=MessageResponse)
def quitar_admin(
    username: str,
    db: Session = Depends(get_db),
    current_admin: User = Depends(get_current_admin_user)
):
    """
    ## Quitar rol de administrador a un usuario (solo admin)
    """
    user = db.query(User).filter(User.username == username).first()
    if not user:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")

    if user.id == current_admin.id:
        raise HTTPException(status_code=403, detail="No puedes quitarte tu propio rol de administrador")

    if not user.admin:
        raise HTTPException(status_code=400, detail="El usuario no es administrador")

    user.admin = False
    db.commit()
    db.refresh(user)

    return {"mensaje": f"Usuario '{user.username}' ya no es administrador"}