from flask import Flask
from controllers.Home_Controllers import index_home
import os

def create_app():
    app = Flask(__name__, static_folder=os.path.abspath('../dijkstra_front/src'), template_folder=os.path.abspath('../dijkstra_front'))

    
    # Registrar los blueprints
    app.register_blueprint(index_home)

    return app

# Ejecutar la aplicación solo si es este el archivo principal
if __name__ == "__main__":
    app = create_app()  # Crear la app
    app.run(debug=True)  # Ejecutar la app en modo de desarrollo (debug)
