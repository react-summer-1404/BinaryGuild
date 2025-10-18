import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "../../components/layouts/LandingLayout";
import Landing from "../../screen/Landing";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [{ path: "/", element: <Landing /> }]
  },
]);
export default Router;
