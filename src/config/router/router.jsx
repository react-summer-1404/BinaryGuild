import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "../../components/layouts/LandingLayout";
import Register from "../../pages/authentication/Register";
import Login from "../../pages/authentication/Login";
import ForgetPassword from "../../pages/authentication/ForgetPassword";

const Router = createBrowserRouter([
  { path: "/", element: <LandingLayout /> },
  { path: "register", element: <Register /> },
  { path: "Login", element: <Login /> },
  { path: "ForgetPassword", element: <ForgetPassword /> },

]);
export default Router;
