import i18n from "i18next"
import Router from '../config/router/router'
import './App.css'

function App() {

  return (
    <main dir={i18n.Languages === "fa" ? "rtl" : "ltr"}>
      <RouterProvider router={Router}/>
    </main>
  )
}

export default App
