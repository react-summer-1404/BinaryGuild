import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../../components/layouts/AuthLayout";
import LandingLayout from "../../components/layouts/LandingLayout";
import Courses from "../../pages/landing/landings-sections/Courses";
import ForgetPasswordWrapper from "../../screen/authentication/pages/ForgetPasswordWrapper";
import LoginWrapper from "../../screen/authentication/pages/LoginWrapper";
import RegisterWrapper from "../../screen/authentication/pages/RegisterWrapper";
import Landing from '../../screen/Landing';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [{ path: "/", element: <Landing /> },
      {path:"/courses-page", element:<Courses/>}
    ],
  },
  { 
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "register", element: <RegisterWrapper /> },
      { path: "login", element: <LoginWrapper /> },
      { path: "forgetPassword", element: <ForgetPasswordWrapper /> },
    ],
  },
]);
export default Router;
