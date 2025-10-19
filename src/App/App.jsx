import i18n from "i18next";
import Router from "../config/router/router";
import "./App.css";
import { RouterProvider } from "react-router-dom";

function App() {

  return (
    <main
      dir={i18n.Languages === "fa" ? "fa" : "en"}
      className="font-persian"
    >
      <RouterProvider router={Router} className="bg-white dark:bg-black" />
    </main>
  );
}

export default App;
