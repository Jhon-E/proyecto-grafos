import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { DataProvider } from "./context/DataProvider.jsx";
import { AlertProvider } from "./context/AlertProvider.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <DataProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </DataProvider>
  </ThemeProvider>
);
