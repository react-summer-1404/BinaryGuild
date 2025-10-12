import i18n from "i18next"
import Router from '../config/router/router'
import './App.css'
import {RouterProvider} from "react-router-dom"

function App() {

  return (
    
    <main dir={i18n.language === "fa"}>
      <RouterProvider router={Router}/>
    </main>
  )
}

export default App
//  ? "rtl" : "ltr"