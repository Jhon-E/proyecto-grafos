import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { DataProvider } from "./context/DataProvider.jsx";
import { AlertProvider } from "./context/AlertProvider.jsx";
import FloydProvider from "./context/FloydProvider.jsx";
import InfoProvider from "./context/InfoProvider.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <FloydProvider>
    <InfoProvider>
      <ThemeProvider>
        <DataProvider>
          <AlertProvider>
            <App />
          </AlertProvider>
        </DataProvider>
      </ThemeProvider>
    </InfoProvider>
  </FloydProvider>
);
