from flask import Flask
from controllers.Home_Controllers import index_home
from flask_cors import CORS
import os

def create_app():
    app = Flask(__name__, static_folder=os.path.abspath('../dijkstra_front/src'), template_folder=os.path.abspath('../dijkstra_front'))

    # Habilitar CORS para toda la aplicación
    CORS(app)

    # Registrar los blueprints
    app.register_blueprint(index_home)

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
