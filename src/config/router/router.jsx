import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "../../components/layouts/LandingLayout";
import Register from "../../pages/authorize/pages/RegisterWrapper";
import Login from "../../pages/authorize/pages/LoginWrapper";
import ForgetPassword from "../../pages/authorize/pages/ForgetPasswordWrapper";
import AuthLayout from "../../components/layouts/AuthLayout";

const Router = createBrowserRouter([
  { path: "/", element: <LandingLayout /> },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "forgetPassword", element: <ForgetPassword /> },
    ],
  },
]);
export default Router;
