import i18n from "i18next"
import Router from '../config/router/router'
import './App.css'
import {RouterProvider} from "react-router-dom"

function App() {

  return (
    <main dir={i18n.languages === "fa" ? "rtl" : "ltr"}>
      <RouterProvider router={Router}/>
    </main>
  )
}

export default App
