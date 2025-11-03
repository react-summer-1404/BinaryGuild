import { useTranslation } from "react-i18next";

import "../core/utility/language/i18n";
import Router from "../config/router/router";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import ThemeModes from "../components/common/them-moods/themeMode";


function App() {
  const { i18n } = useTranslation();

  return (
    <main
      dir={i18n.language === "fa" ? "rtl" : "ltr"}
      className={`bg-MainBg  ${
        i18n.language === "fa" ? "font-IranSans" : "font-Pop_Med"
      } ${ThemeModes} + "font-persian m-auto bg-background"`}
    >
      <RouterProvider router={Router} />
    </main>
  );
}

export default App;
