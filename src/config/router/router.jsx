import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "../../components/layouts/LandingLayout";
import Register from "../../pages/authorize/pages/RegisterWrapper";
import Login from "../../pages/authorize/pages/LoginWrapper";
import AuthLayout from "../../components/layouts/AuthLayout";
import ForgetPasswordWrapper from "../../pages/authorize/pages/ForgetPasswordWrapper";
import Landing from '../../pages/landing/Landing'

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [{ path: "/", element: <Landing /> }],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "forgetPassword", element: <ForgetPasswordWrapper /> },
    ],
  },
]);
export default Router;
