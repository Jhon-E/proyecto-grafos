import RenderHeader from "./components/renderHeader";
import { RenderMap } from "./components/RenderMap";
import { RenderEjemplos } from "./components/RenderEjemplos";
import RenderGraph from "./components/RenderGraph";
import { useContext } from "react";
import { CoordsContext } from "./context/CoordProvider";

function App() {
  const { c, start, end } = useContext(CoordsContext);

  function sendLocation() {
    fetch(
      `http://127.0.0.1:5000/DistanciaCal?lat_origen=${start.lat}&lon_origen=${end.lng}&lat_destino=${end.lat}&lon_destino=${end.lng}`
    )
      .then((response) => response.text()) // Obtener la respuesta como texto (HTML)
      .then((data) => {
        // Crear un contenedor o usar un div existente para renderizar el mapa
        const container = document.getElementById("mapContainer");
        if (container) {
          container.innerHTML = data; // Renderiza el HTML devuelto
        } else {
          console.error(
            "No se encontró el contenedor para renderizar el mapa."
          );
        }
      })
      .catch((error) => console.error("Error al obtener la ruta:", error));
  }

  return (
    <>
      <RenderHeader />
      <main className=" md:px-60 text-xl sm:px-8">
        <section
          id="como-funciona"
          className="w-full md:h-[650px] sm:h-auto sm:justify-center mockup-window border-base-300 border bg-base-200"
        >
          <article className="flex flex-col p-6 md:flex-row md:w-full">
            <h2 className=" text-4xl text-primary">¿Cómo Funciona?</h2>
            <p>
              <br />
              El algoritmo de Dijkstra básicamente inicia en el nodo que escojas
              <span className=" text-red-400"> el nodo de origen</span> y
              analiza el grafo para encontrar el camino más corto entre ese nodo
              y todos los otros nodos en el grafo. El algoritmo mantiene un
              registro de la distancia conocida más corta desde el nodo de
              origen hasta cada nodo y actualiza el valor si encuentra un camino
              más corto.
              <br />
              <br />
              Una vez que el algoritmo ha encontrado el camino más corto entre
              el nodo de origen y otro nodo, ese nodo se marca como "visitado" y
              se agrega al camino.
              <br />
              El proceso continúa hasta que todos los nodos en el grafo han sido
              añadidos al camino.
            </p>
            <img
              className=" rounded-lg md:h-[300px] sm:h-300 m-10 sm:object-cover"
              src="https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-nodes-icon-for-your-project-png-image_1600097.jpg"
              alt="Icono nodos"
            />
          </article>
          <span className="p-6">
            De esta forma, tenemos un camino que conecta al nodo de origen con
            todos los otros nodos siguiendo el camino más corto posible para
            llegar a cada uno de ellos.
          </span>
        </section>
        <section id="ejemplos" className="w-full h-auto relative -z-30 p-6">
          <RenderEjemplos />
        </section>
      </main>
      <section
        id="calculadora"
        className="text-secondary bg-slate-900 h-dvh py-14 px-4 md:px-60 flex flex-col justify-center items-center left-0 w-full -z-10"
      >
        <h2 className=" text-4xl self-start font-bold">Selecciona 2 puntos</h2>
        <div id="mapa" className="w-full h-[600px] m-10 ">
          <RenderMap />
        </div>
        <button
          id="calcular"
          className="btn btn-active text-base-100 bg-primary w-max border-base-100"
          onClick={sendLocation}
        >
          Calcular Camino Más Corto
        </button>
      </section>
      <section className="w-full h-full flex justify-evenly">
        <RenderGraph />
      </section>
      <footer className="footer footer-center bg-base-300 text-base-content p-4 relative bottom-0">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - Todos los derechos
            reservados para Jhone
          </p>
        </aside>
      </footer>
    </>
  );
}

export default App;
