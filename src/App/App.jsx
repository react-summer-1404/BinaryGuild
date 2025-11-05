import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "../core/utility/language/i18n";
import Router from "../config/router/router";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import ThemeModes from "../components/common/them-moods/themeMode";


function App() {
  const { i18n } = useTranslation();

  useEffect(()=>{
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token){console.log("user is still loged in")}else{console.log("no token")}
  },[])



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
