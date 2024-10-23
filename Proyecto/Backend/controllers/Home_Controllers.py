from flask import Blueprint, render_template, request, url_for, redirect, send_from_directory
import osmnx as ox
import networkx as nx
import folium
import os
from flask_cors import CORS, cross_origin


index_home = Blueprint('index_home', __name__)


@index_home.route("/DistanciaCal", endpoint='CalculoRuta', methods=['GET'])
@cross_origin()  # Habilitar CORS solo para esta ruta
def CalculoRuta():
   # Obtener las coordenadas del punto de inicio y destino de la solicitud
    lat_origen = float(request.args.get('lat_origen'))
    lon_origen = float(request.args.get('lon_origen'))
    lat_destino = float(request.args.get('lat_destino'))
    lon_destino = float(request.args.get('lon_destino'))

    # Función para calcular la ruta más corta y mostrarla en un mapa interactivo
    def calcular_ruta(lat_origen, lon_origen, lat_destino, lon_destino, lugar='Barranquilla, Colombia'):
        # Descargar el grafo del área especificada
        G = ox.graph_from_place(lugar, network_type='drive')

        # Obtener los nodos más cercanos a los puntos de origen y destino
        nodo_origen = ox.distance.nearest_nodes(G, X=lon_origen, Y=lat_origen)
        nodo_destino = ox.distance.nearest_nodes(
            G, X=lon_destino, Y=lat_destino)

        # Calcular la ruta más corta en términos de longitud
        ruta = nx.shortest_path(G, nodo_origen, nodo_destino, weight='length')

        # Obtener las coordenadas de los nodos en la ruta
        ruta_coords = [(G.nodes[n]['y'], G.nodes[n]['x']) for n in ruta]

        # Crear un mapa centrado en el punto de origen
        mapa = folium.Map(location=[lat_origen, lon_origen], zoom_start=14)

        # Añadir marcador para el punto de origen
        folium.Marker(location=[lat_origen, lon_origen], popup='Punto de Partida', icon=folium.Icon(
            color='green')).add_to(mapa)

        # Añadir marcador para el nodo de origen encontrado
        origen_coords = (G.nodes[nodo_origen]['y'], G.nodes[nodo_origen]['x'])
        folium.Marker(location=origen_coords, popup='Nodo de Origen',
                      icon=folium.Icon(color='blue')).add_to(mapa)

        # Añadir marcador para el punto de destino
        folium.Marker(location=[lat_destino, lon_destino],
                      popup='Destino', icon=folium.Icon(color='red')).add_to(mapa)

        # Dibujar la ruta en el mapa
        folium.PolyLine(ruta_coords, color='blue',
                        weight=5, opacity=0.8).add_to(mapa)

        # Guardar el mapa como archivo HTML
        map_filename = "ruta_mapa.html"
        file_path = os.path.join('x', map_filename)
        if os.path.exists(file_path):
            os.remove(file_path)
        # Guardar el mapa en la carpeta 'x'
        mapa.save(os.path.join('x', map_filename))

        return map_filename  # Retornar el nombre del archivo generado

    # Lugar donde se va a calcular la ruta, en este caso Barranquilla
    lugar = "Barranquilla, Colombia"

    # Llamar a la función para calcular la ruta y generar el mapa interactivo
    try:
        map_filename = calcular_ruta(
            lat_origen, lon_origen, lat_destino, lon_destino, lugar)
        # Redirigir para servir el archivo generado
        return redirect(url_for('index_home.serve_map', filename=map_filename))
    except ValueError as e:
        print(e)
        return redirect(url_for("index_home.home"))


@index_home.route("/CalculoDistancia/ruta_mapa.html", methods=['GET'])
def serve_map():
    # Servir el archivo HTML generado desde la carpeta 'x'
    return send_from_directory('x', 'ruta_mapa.html')
