import i18n from "i18next";
import Router from "../config/router/router";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import ThemeModes from "../components/common/them-moods/themeMode";

function App() {
  return (
    <main
      dir={i18n.Languages === "fa" ? "fa" : "en"}
      className={ThemeModes + "font-persian m-auto w-11/12 bg-background"}
    >
      <RouterProvider router={Router} />
    </main>
  );
}

export default App;
