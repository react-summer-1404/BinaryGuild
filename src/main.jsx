import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App/App";
import "./core/utility/language/i18n";
import ProviderApp from "./App/ProviderApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProviderApp>
      <App />
    </ProviderApp>
  </StrictMode>
);
