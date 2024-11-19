import RenderGraph from "./components/Renders/RenderGraph";
import { useContext, useEffect } from "react";
import { DataContext } from "./context/DataProvider";
import RenderNav from "./components/Renders/RenderNav";
import RenderAlert from "./components/Renders/RenderAlert";
import { AlertContext } from "./context/AlertProvider";
import DisplayInfo from "./components/DisplayInfo";
import { ThemeContext } from "./context/ThemeProvider";
import RenderInfoDijkstra from "./components/Renders/RenderInfoDijkstra";
import RenderInfoFloyd from "./components/Renders/RenderInfoFloyd";
import { InfoContext } from "./context/InfoProvider";
import { motion, AnimatePresence } from "motion/react";

function App() {
  const { showAlert } = useContext(AlertContext);
  const { action, setAction } = useContext(DataContext);
  const { theme } = useContext(ThemeContext);
  const { info } = useContext(InfoContext);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setAction("DEFAULT");
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [action, setAction]);

  return (
    <>
      <main className="w-dvw h-dvh bg-base-100 overflow-hidden" data-theme={theme}>
        <section className="flex w-full h-full flex-col lg:flex-row">
          <aside className=" relative flex-grow place-items-center">
            <RenderNav />
            <RenderGraph />
          </aside>
          {/* esto ocultarlo hasta que haya info */}
          <AnimatePresence mode="wait">
            {!!info.path ? (
              <motion.aside
                className="bg-transparent w-16 grid flex-grow place-items-center"
                initial={{ x: 1600 }} // Animación al montar
                animate={{ x: 0 }} // Estado final
                exit={{ opacity: 0, x: 800 }} // Animación al desmontar
                transition={{ duration: 0.5 }} // Duración de la transición
              >
                <RenderInfoDijkstra info={info} />
              </motion.aside>
            ) : null}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {!!info.centerNode ? (
              <motion.aside
                className="bg-transparent w-16 grid flex-grow place-items-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <RenderInfoFloyd info={info} />
              </motion.aside>
            ) : null}
          </AnimatePresence>
        </section>
        {showAlert ? <RenderAlert action={action} /> : null}
        <DisplayInfo />
      </main>
    </>
  );
}

export default App;
