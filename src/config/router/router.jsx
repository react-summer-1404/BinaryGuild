import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "../../components/layouts/LandingLayout";
import Register from "../../pages/pages/Register";
import Login from "../../pages/pages/Login";
import ForgetPassword from "../../pages/pages/ForgetPassword";
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
