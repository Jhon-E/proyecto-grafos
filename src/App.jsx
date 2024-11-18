import RenderGraph from "./components/Renders/RenderGraph";
import { useContext, useEffect } from "react";
import { DataContext } from "./context/DataProvider";
import RenderNav from "./components/Renders/RenderNav";
import RenderAlert from "./components/Renders/RenderAlert";
import { AlertContext } from "./context/AlertProvider";
import DisplayInfo from "./components/DisplayInfo";
import { ThemeContext } from "./context/ThemeProvider";
import RenderInfoDijkstra from "./components/Renders/RenderInfo";
import { DataDijkstra } from "./context/DijkstraProvider";

function App() {
  const { showAlert } = useContext(AlertContext);
  const { action, setAction } = useContext(DataContext);
  const { theme } = useContext(ThemeContext);
  const { infoDikstra } = useContext(DataDijkstra);

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
      <main className="w-dvw h-dvh bg-base-100" data-theme={theme}>
        <section className="flex w-full h-full flex-col lg:flex-row">
          <aside className="relative grid flex-grow place-items-center">
            <RenderNav />
            <RenderGraph />
          </aside>
          {/* esto ocultarlo hasta que se use dijkstra o floyd-warshall */}
          {!!infoDikstra.path ? (
            <>
              <aside className=" bg-transparent w-16 grid flex-grow place-items-center">
                <RenderInfoDijkstra info={infoDikstra} />
              </aside>
            </>
          ) : null}
        </section>
        {showAlert ? <RenderAlert action={action} /> : null}
        <DisplayInfo />
      </main>
    </>
  );
}

export default App;
