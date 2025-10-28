from fastapi import FastAPI
from dotenv import load_dotenv
import os

# Cargar variables del archivo .env
load_dotenv()

app = FastAPI()

@app.get("/")
def inicio():
    db_url = os.getenv("DATABASE_URL")
    app_name = os.getenv("APP_NAME")
    return {
        "app_name": app_name,
        "database_url": db_url
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)