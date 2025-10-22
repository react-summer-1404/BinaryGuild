import { useTranslation } from "react-i18next";

import Router from "../config/router/router";
import "./App.css";
import { RouterProvider } from "react-router-dom";

function App() {
    const { i18n } = useTranslation()


  return (

    <main

      dir={i18n.language === 'fa' ? 'rtl' : 'ltr'} className={`bg-MainBg  ${i18n.language === 'fa' ? 'font-IranSans' : 'font-Pop_Med'}`}
    >
      <RouterProvider router={Router} className="bg-white dark:bg-black" />
    </main>
  );
}

export default App;
