import { createBrowserRouter } from "react-router-dom"
import LandingLayout from "../../components/layouts/LandingLayout"

const Router = createBrowserRouter([
    {path:"/" , element: <LandingLayout/>},
])
export default Router