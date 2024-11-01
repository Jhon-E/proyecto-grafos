import { useContext, useEffect, useRef } from "react";
import { DataContext } from "../../context/DataProvider";
import { AlertContext } from "../../context/AlertProvider";
import { graph_1 } from "../../mocks/Grafos";

const RenderNav = () => {
  const { setAction, dispatch } = useContext(DataContext);
  const { setShowAlert } = useContext(AlertContext);

  const navRef = useRef();

  useEffect(() => {
    console.log({ graph_1 });

    // Cerrar <details> si se hace clic fuera de ellos
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        const openDetails = navRef.current.querySelectorAll("details[open]");
        openDetails.forEach((detail) => {
          detail.removeAttribute("open");
        });
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  /* PARA QUE SEA DESPLEGABLE DENTRO DE UNA ETIQUETA LI DEBE HABER UNA ETIQUETA DETAILS CON SUS SUMMARYS */
  return (
    <nav ref={navRef} className="h-auto fixed left-2/4 -translate-x-2/4 top-3">
      <ul className="menu lg:menu-horizontal bg-base-200 rounded-box gap-6">
        <li>
          <details>
            <summary>Nodos</summary>
            <ul>
              <li>
                <button
                  onClick={() => {
                    setAction("INSERT");
                    setShowAlert(true);
                  }}
                >
                  Insertar
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setAction("DELETE");
                    setShowAlert(true);
                  }}
                >
                  Borrar
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setAction("LINK");
                    setShowAlert(true);
                  }}
                >
                  Enlazar
                </button>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Algoritmos</summary>
            <ul>
              <li>
                <button
                  onClick={() => {
                    setAction("DIJKSTRA");
                    setShowAlert(true);
                  }}
                >
                  Dijkstra
                </button>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Grafos de ejemplo</summary>
            <ul>
              <li>
                <button
                  onClick={() => {
                    setAction("GRAPH_1");
                    dispatch({type: "GRAPH_1", graph_1})
                  }}
                >
                  Grafo 1
                </button>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  );
};

export default RenderNav;
