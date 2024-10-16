import "./styleEjemplos.css"

export const RenderEjemplos = () => {
  return (
    <>
      <h2 className=" text-4xl text-primary">Ejemplos de implementación</h2>
      <br />
      <article>
        Los grafos son estructuras de datos muy versátiles y se utilizan en una
        amplia variedad de aplicaciones en la vida real. Aquí se expondrán
        algunos ejemplos de cómo se implementan y utilizan los grafos en
        diferentes contextos:
      </article>
      <br />
      <ol className="flex gap-4 flex-wrap justify-center">
        <li className="item" id="redesSociales">
          <div className="card image-full w-96 shadow-xl">
            <figure>
              <img src="/Redes-Sociales.webp" alt="Redes sociales" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-2xl text-secondary font-bold">
                Redes Sociales
              </h2>
              <ul className=" text-base">
                <li>
                  <b>Conexiones entre Usuarios:</b> Los grafos se utilizan para
                  representar las conexiones entre usuarios. Cada nodo
                  representa un usuario y cada arista representa una relación de
                  amistad o seguimiento.
                </li>
                <br />
                <li>
                  <b>Recomendaciones de Amigos:</b> Algoritmos de grafos como el
                  de búsqueda en anchura (BFS) se utilizan para recomendar
                  nuevos amigos basándose en amigos comunes.
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="item">
          <div className="card image-full w-96 shadow-xl">
            <figure>
              <img src="/navegacion.webp" alt="Redes sociales" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-2xl text-secondary font-bold">
                Sistemas de Navegación y Mapas
              </h2>
              <ul className=" text-base">
                <li>
                  <b>Rutas y Caminos:</b> Los grafos representan ciudades o
                  puntos de interés como nodos y las carreteras como aristas.
                  Algoritmos como Dijkstra o A* se utilizan para encontrar la
                  ruta más corta entre dos puntos
                </li>
                <br />
                <li>
                  <b>Optimización de Rutas:</b> En logística y transporte, los
                  grafos ayudan a optimizar rutas de entrega para minimizar el
                  tiempo y el costo.
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="item">
          <div className="card image-full w-96 shadow-xl">
            <figure>
              <img src="/comunicacion.jpeg" alt="Redes sociales" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-2xl text-secondary font-bold">
                Sistemas de Navegación y MapasRedes de Comunicación
              </h2>
              <ul className=" text-base">
                <li>
                  <b>Enrutamiento de Paquetes:</b> En redes de computadoras, los
                  grafos representan nodos de red y enlaces de comunicación. Los
                  algoritmos de grafos se utilizan para determinar la ruta más
                  eficiente para el enrutamiento de paquetes de datos.
                </li>
                <br />
                <li>
                  <b>Detección de Fallos:</b> Los grafos ayudan a identificar y
                  aislar fallos en la red, mejorando la resiliencia y la
                  recuperación.
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="item">
          <div className="card image-full w-96 shadow-xl">
            <figure>
              <img src="/biologia.jpg" alt="Biologia" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-2xl text-secondary font-bold">
                Biología y Genómica
              </h2>
              <ul className=" text-base">
                <li>
                  <b>Redes de Interacción de Proteínas:</b> Los grafos
                  representan proteínas como nodos y las interacciones entre
                  ellas como aristas, ayudando a entender las funciones
                  biológicas y las enfermedades
                </li>
                <br />
                <li>
                  <b>Análisis de Secuencias Genéticas:</b> Los grafos de De
                  Bruijn se utilizan para ensamblar secuencias de ADN a partir
                  de fragmentos cortos, facilitando la investigación genética.
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="item">
          <div className="card image-full w-96 shadow-xl">
            <figure>
              <img src="/inteligencia.jpg" alt="AI" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-2xl text-secondary font-bold">
                Inteligencia Artificial y Aprendizaje Automático
              </h2>
              <ul className=" text-base">
                <li>
                  <b>Redes Neuronales:</b> Las redes neuronales profundas se
                  pueden modelar como grafos donde los nodos representan
                  neuronas y las aristas representan las conexiones entre ellas.
                </li>
                <br />
                <li>
                  <b>Análisis de Redes Sociales:</b> Los grafos se utilizan para
                  analizar la propagación de información y detectar comunidades
                  dentro de redes sociales.
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="item">
          <div className="card image-full w-96 shadow-xl">
            <figure>
              <img src="/seguridad.jpg" alt="ciberseguridad" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-2xl text-secondary font-bold">
                Seguridad y Detección de Fraude
              </h2>
              <ul className=" text-base">
                <li>
                  <b>Detección de Fraude en Transacciones:</b> Los grafos se
                  utilizan para modelar transacciones financieras y detectar
                  patrones sospechosos que podrían indicar fraude
                </li>
                <br />
                <li>
                  <b>Análisis de Redes de Delincuencia:</b> Los grafos ayudan a
                  identificar y analizar redes de delincuencia, facilitando la
                  detección y prevención de actividades ilegales.
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ol>
    </>
  );
};
