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
      <main className="w-dvw h-dvh bg-base-100" data-theme={theme}>
        <section className="flex w-full h-full flex-col lg:flex-row">
          <aside className=" relative flex-grow place-items-center">
            <RenderNav />
            <RenderGraph />
          </aside>
          {/* esto ocultarlo hasta que haya info */}
          {!!info.path ? (
            <>
              <aside className=" bg-transparent w-16 grid flex-grow place-items-center">
                <RenderInfoDijkstra info={info} />
              </aside>
            </>
          ) : null}
          {!!info.centerNode ? (
            <>
              <aside className=" bg-transparent w-16 grid flex-grow place-items-center">
                <RenderInfoFloyd info={info} />
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
