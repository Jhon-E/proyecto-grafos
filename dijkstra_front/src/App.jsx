import RenderGraph from "./components/Renders/RenderGraph";
import { useContext, useEffect, useRef } from "react";
import { DataContext } from "./context/DataProvider";
import RenderNav from "./components/Renders/RenderNav";
import RenderAlert from "./components/Renders/RenderAlert";
import { AlertContext } from "./context/AlertProvider";
import DisplayInfo from "./components/DisplayInfo";
import useDijkstra from "./hooks/useDijkstra";

function App() {
  const { showAlert } = useContext(AlertContext);
  const { action, setAction } = useContext(DataContext);
  const mousePosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    mousePosition.current = { x: e.clientX, y: e.clientY };
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.key, action);
      if (e.key === "Escape") {
        setAction("DEFAULT");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [action, setAction]);

  return (
    <>
      <main className="w-dvw h-dvh bg-base-100" onMouseMove={handleMouseMove}>
        <RenderNav />
        <section id="creador" className="h-full w-full ">
          <RenderGraph />
        </section>
        {showAlert ? <RenderAlert action={action} /> : null}
        <DisplayInfo info={mousePosition.current} />
      </main>
      {/*  <footer className="footer footer-center bg-base-300 text-base-content p-4 relative bottom-0">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - Todos los derechos
            reservados para Jhone, Cacua y Daniel.
          </p>
        </aside>
      </footer> */}
    </>
  );
}

export default App;
