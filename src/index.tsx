import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { ViewportProvider } from "./context/ViewportContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ViewportProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ViewportProvider>
    </ThemeProvider>
  </React.StrictMode>
);
