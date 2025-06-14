import Main from "./main";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Main />
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}