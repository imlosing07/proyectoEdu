from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
import os

router = APIRouter(prefix="/static", tags=["Archivos estáticos"])

# Directorios base
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CATEGORIAS_DIR = os.path.join(BASE_DIR, "uploads", "categorias")
ITEMS_DIR = os.path.join(BASE_DIR, "uploads", "items")

# ===========================
# Función auxiliar de seguridad
# ===========================
def safe_join(base_dir: str, filename: str) -> str:
    """
    Une rutas de forma segura evitando directory traversal.
    Permite solo nombres de archivo (sin subcarpetas ni '../')
    """
    # No permitir separadores de ruta
    if ".." in filename or "/" in filename or "\\" in filename:
        raise HTTPException(status_code=400, detail="Nombre de archivo no válido")

    file_path = os.path.join(base_dir, filename)
    abs_path = os.path.abspath(file_path)

    # Asegurar que está dentro del directorio base
    if not abs_path.startswith(os.path.abspath(base_dir)):
        raise HTTPException(status_code=403, detail="Acceso no autorizado")

    return abs_path

# ===========================
# GET — Imagen de categoría
# ===========================
@router.get("/categoria/{image}", response_class=FileResponse)
def get_categoria_image(image: str):
    """
    ## Obtener imagen de una categoría de forma segura
    """
    image_path = safe_join(CATEGORIAS_DIR, image)

    if not os.path.exists(image_path):
        raise HTTPException(status_code=404, detail="Imagen de categoría no encontrada")

    return FileResponse(image_path)

# ===========================
# GET — Imagen de item
# ===========================
@router.get("/item/{image}", response_class=FileResponse)
def get_item_image(image: str):
    """
    ## Obtener imagen de un item de forma segura
    """
    image_path = safe_join(ITEMS_DIR, image)

    if not os.path.exists(image_path):
        raise HTTPException(status_code=404, detail="Imagen del item no encontrada")

    return FileResponse(image_path)

