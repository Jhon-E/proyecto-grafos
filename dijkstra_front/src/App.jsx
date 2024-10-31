import RenderGraph from "./components/Renders/RenderGraph";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "./context/DataProvider";
import RenderNav from "./components/Renders/RenderNav";
import RenderAlert from "./components/Renders/RenderAlert";
import { AlertContext } from "./context/AlertProvider";

function App() {
  const { showAlert } = useContext(AlertContext);
  const { action } = useContext(DataContext);

  return (
    <>
      <main className="w-dvw h-dvh bg-base-100">
        <RenderNav />
        <section id="creador" className="h-full w-full ">
          <RenderGraph />
        </section>
        {showAlert ? (
          <RenderAlert action={action} />
        ) : null}
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
