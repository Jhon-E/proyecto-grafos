import os

class Config:
    # Configuración de la carpeta de templates
    TEMPLATE_FOLDER = os.path.join(os.getcwd(), 'dijiktra_front')  # Ruta directa a la carpeta que contiene tus templates
    STATIC_FOLDER = os.path.join(os.getcwd(), 'dijiktra_front')  # Carpeta de archivos estáticos
