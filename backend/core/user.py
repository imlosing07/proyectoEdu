from datetime import datetime, timedelta
from typing import Optional
from fastapi import HTTPException, status, Depends
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
import jwt
import bcrypt
import os

from database.config import get_db
from database.database import User

# Configuración de JWT
SECRET_KEY = os.getenv("SECRET_KEY", "tu_clave_secreta_muy_segura_cambiala")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# OAuth2 para el token
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/login")

# ==========================================
# FUNCIONES DE HASH Y VERIFICACIÓN
# ==========================================

def hash_password(password: str) -> str:
    """
    Hashea la contraseña usando bcrypt
    
    Args:
        password: Contraseña en texto plano
        
    Returns:
        Contraseña hasheada
    """
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed.decode('utf-8')

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """
    Verifica si la contraseña coincide con el hash
    
    Args:
        plain_password: Contraseña en texto plano
        hashed_password: Contraseña hasheada
        
    Returns:
        True si coinciden, False en caso contrario
    """
    return bcrypt.checkpw(plain_password.encode('utf-8'), hashed_password.encode('utf-8'))

# ==========================================
# FUNCIONES DE JWT
# ==========================================

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    """
    Crea un token JWT
    
    Args:
        data: Datos a incluir en el token
        expires_delta: Tiempo de expiración del token
        
    Returns:
        Token JWT codificado
    """
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def decode_token(token: str) -> dict:
    """
    Decodifica un token JWT
    
    Args:
        token: Token JWT a decodificar
        
    Returns:
        Payload del token
        
    Raises:
        HTTPException: Si el token es inválido o expiró
    """
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token expirado",
            headers={"WWW-Authenticate": "Bearer"}
        )
    except jwt.exceptions.DecodeError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token inválido",
            headers={"WWW-Authenticate": "Bearer"}
        )

# ==========================================
# FUNCIONES DE AUTENTICACIÓN
# ==========================================

def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)) -> User:
    """
    Obtiene el usuario actual desde el token JWT
    
    Args:
        token: Token JWT de autenticación
        db: Sesión de base de datos
        
    Returns:
        Usuario autenticado
        
    Raises:
        HTTPException: Si las credenciales no son válidas o el usuario no existe
    """
    payload = decode_token(token)
    username: str = payload.get("sub")
    
    if username is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="No se pudo validar las credenciales",
            headers={"WWW-Authenticate": "Bearer"}
        )
    
    user = db.query(User).filter(User.username == username).first()
    
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Usuario no encontrado",
            headers={"WWW-Authenticate": "Bearer"}
        )
    
    if not user.activo:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Usuario inactivo"
        )
    
    return user

def get_current_admin_user(current_user: User = Depends(get_current_user)) -> User:
    """
    Verifica que el usuario actual sea administrador
    
    Args:
        current_user: Usuario autenticado
        
    Returns:
        Usuario administrador
        
    Raises:
        HTTPException: Si el usuario no es administrador
    """
    if not current_user.admin:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="No tienes permisos de administrador"
        )
    return current_user

# ==========================================
# FUNCIONES DE VALIDACIÓN
# ==========================================

def validate_user_exists(username: str, db: Session) -> bool:
    """
    Verifica si un usuario ya existe en la base de datos
    
    Args:
        username: Nombre de usuario a verificar
        db: Sesión de base de datos
        
    Returns:
        True si existe, False en caso contrario
    """
    user = db.query(User).filter(User.username == username).first()
    return user is not None

def authenticate_user(username: str, password: str, db: Session) -> Optional[User]:
    """
    Autentica un usuario verificando sus credenciales
    
    Args:
        username: Nombre de usuario
        password: Contraseña
        db: Sesión de base de datos
        
    Returns:
        Usuario si las credenciales son correctas, None en caso contrario
    """
    user = db.query(User).filter(User.username == username).first()
    
    if not user:
        return None
    
    if not verify_password(password, user.password):
        return None
    
    if not user.activo:
        return None
    
    return user