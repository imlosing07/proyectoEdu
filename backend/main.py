from fastapi import FastAPI
from dotenv import load_dotenv
from contextlib import asynccontextmanager
from database.database import init_db
import os

# Importar el router de usuario
from api.user import router as user_router

# Cargar variables del archivo .env
load_dotenv()

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Iniciando aplicacion
    init_db()
    yield
    # Cerrando aplicacion

app = FastAPI(
    lifespan=lifespan,
    title="API con Autenticación",
    description="API REST con FastAPI, SQLite y JWT",
    version="1.0.0"
)

# Incluir el router de usuarios
app.include_router(user_router)

# Ruta de bienvenida
@app.get("/")
def read_root():
    return {
        "mensaje": "Bienvenido a la API",
        "docs": "/docs",
        "endpoints": {
            "register": "POST /api/register",
            "login": "POST /api/login",
            "perfil": "POST /api/perfil"
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)