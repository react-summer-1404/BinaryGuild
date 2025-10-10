import { createBrowserRouter } from "react-router-dom"
import LandingLayout from "../../components/layouts/LandingLayout"
import { Children } from "react"
import Register from "../../pages/authentication/Register"

const Router = createBrowserRouter([
    {path:"/" , element: <LandingLayout/>}, 
    Children[
        {path:"/register" , element:<Register/>}
    ]
])
export default Router