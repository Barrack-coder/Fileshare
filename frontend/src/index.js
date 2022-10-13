import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ThemeContextWrapper from "./theme/ThemeWrapper";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeContextWrapper>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeContextWrapper>
);
