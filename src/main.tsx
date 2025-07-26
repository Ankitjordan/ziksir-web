import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../frontend/src/App.tsx";
import "../frontend/src/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);