import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { DataProvider } from "./context/DataProvider.jsx";
import { AlertProvider } from "./context/AlertProvider.jsx";
import DijkstraProvider from "./context/DijkstraProvider.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <DijkstraProvider>
    <ThemeProvider>
      <DataProvider>
        <AlertProvider>
          <App />
        </AlertProvider>
      </DataProvider>
    </ThemeProvider>
  </DijkstraProvider>
);
