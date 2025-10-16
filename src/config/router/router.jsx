import { createBrowserRouter } from "react-router-dom"
import LandingLayout from "../../components/layouts/LandingLayout"
import Landing from "../../pages/landing/Landing"

const Router = createBrowserRouter([
    {path:"/" , element: <LandingLayout/>},
    {path:"/landing",element:<Landing/>}
])
export default Router