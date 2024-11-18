import { useContext, useEffect, useRef } from "react";
import { DataContext } from "../../context/DataProvider";
import { AlertContext } from "../../context/AlertProvider";
import { ThemeContext } from "../../context/ThemeProvider";
import { graph_1, graph_2, graph_3, graph_4 } from "../../utils/Grafos";

const RenderNav = () => {
  const { setAction, dispatch } = useContext(DataContext);
  const { setShowAlert } = useContext(AlertContext);
  const { setTheme } = useContext(ThemeContext);

  const navRef = useRef();

  useEffect(() => {
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
    <nav
      ref={navRef}
      className="absolute h-auto left-2/4 -translate-x-2/4 top-3 w-full flex items-center justify-center"
    >
      <div className="absolute left-6 top-3">
        <label
          className="flex cursor-pointer gap-2"
          onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
      <ul className="menu lg:menu-horizontal bg-base-200 rounded-box gap-6">
        {/* NODOS */}
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
        {/* ALGORITMOS */}
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
              <li>
                <button
                  onClick={() => {
                    setAction("FLOYD_WARSHALL");
                    setShowAlert(true);
                  }}
                >
                  Floyd-Warshall
                </button>
              </li>
            </ul>
          </details>
        </li>
        {/* EJEMPLOS */}
        <li>
          <details>
            <summary>Grafos de ejemplo</summary>
            <ul>
              <li>
                <button
                  onClick={() => {
                    setAction("GRAPH_1");
                    dispatch({ type: "GRAPH_1", graph_1 });
                  }}
                >
                  Grafo 1
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setAction("GRAPH_2");
                    dispatch({ type: "GRAPH_2", graph_2 });
                  }}
                >
                  Grafo 2
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setAction("GRAPH_3");
                    dispatch({ type: "GRAPH_3", graph_3 });
                  }}
                >
                  Grafo 3
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setAction("GRAPH_4");
                    dispatch({ type: "GRAPH_4", graph_4 });
                  }}
                >
                  Grafo 4
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
