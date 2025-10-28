from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, JSON, Text
from sqlalchemy.orm import relationship
from database.config import Base, engine

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    admin = Column(Boolean, default=False)
    activo = Column(Boolean, default=True)
    
    # Relaciones
    items = relationship("Item", back_populates="user")

class Categoria(Base):
    __tablename__ = "categorias"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    image = Column(String, nullable=True)
    
    # Relaciones
    items = relationship("Item", back_populates="categoria")

class Item(Base):
    __tablename__ = "items"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    image = Column(String, nullable=True)
    contenido = Column(JSON, nullable=False)  # Almacena el JSON con texto, test, etc.
    audio_type = Column(String, nullable=True)  # hombre, mujer, etc
    activo = Column(Boolean, default=True)
    
    # Claves foráneas
    id_user = Column(Integer, ForeignKey("users.id"), nullable=False)
    id_category = Column(Integer, ForeignKey("categorias.id"), nullable=False)
    
    # Relaciones
    user = relationship("User", back_populates="items")
    categoria = relationship("Categoria", back_populates="items")


def init_db():
    Base.metadata.create_all(bind=engine)
    print("Base de datos inicializada correctamente")

def drop_db():
    Base.metadata.drop_all(bind=engine)
    print("Todas las tablas han sido eliminadas")

