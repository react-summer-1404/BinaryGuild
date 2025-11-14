import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App/App";
import "./core/utility/language/i18n";
import ProviderApp from "./App/ProviderApp";
import { Form } from "formik";
import { AddProfileInfo } from "./core/services/api/put-data";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProviderApp>
      <App />
    </ProviderApp>
  </StrictMode>
);
