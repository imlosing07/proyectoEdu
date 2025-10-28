from pydantic import BaseModel, Field

class UserRegister(BaseModel):
    username: str = Field(..., min_length=3, max_length=50, description="Nombre de usuario")
    password: str = Field(..., min_length=6, description="Contraseña del usuario")

    class Config:
        json_schema_extra = {
            "example": {
                "username": "juan",
                "password": "123456"
            }
        }

class UserLogin(BaseModel):
    username: str = Field(..., description="Nombre de usuario")
    password: str = Field(..., description="Contraseña del usuario")

    class Config:
        json_schema_extra = {
            "example": {
                "username": "juan",
                "password": "123456"
            }
        }

class TokenResponse(BaseModel):
    token: str = Field(..., description="Token JWT de autenticación")
    token_type: str = Field(default="bearer", description="Tipo de token")

    class Config:
        json_schema_extra = {
            "example": {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                "token_type": "bearer"
            }
        }

class PerfilResponse(BaseModel):
    username: str = Field(..., description="Nombre de usuario")
    admin: bool = Field(..., description="Es administrador")
    activo: bool = Field(..., description="Usuario activo")

    class Config:
        json_schema_extra = {
            "example": {
                "username": "juan",
                "admin": False,
                "activo": True
            }
        }

class MessageResponse(BaseModel):
    mensaje: str = Field(..., description="Mensaje de respuesta")

    class Config:
        json_schema_extra = {
            "example": {
                "mensaje": "registro completo"
            }
        }