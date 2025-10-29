import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "../../components/layouts/LandingLayout";
import RegisterWrapper from "../../screen/authentication/RegisterWrapper";
import { LoginWrapper } from "../../screen/authentication/LoginWrapper";
import ForgetPasswordWrapper from "../../screen/authentication/ForgetPasswordWrapper";
import AuthLayout from "../../components/layouts/AuthLayout";
import Landing from "../../pages/landing/Landing";
import { CourseDetailPage } from "../../screen/courses/courseDetail/CourseDetailPage";
import SetNewPassword from "../../pages/authorize/steps/SetNewPassword";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "courses/:id", element: <CourseDetailPage /> },
    ],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "register", element: <RegisterWrapper /> },
      { path: "login", element: <LoginWrapper /> },
      { path: "forgetpassword", element: <ForgetPasswordWrapper />},
      { path: "/resetpassword/:resetValue", element: <SetNewPassword/> },
    ],
  },
]);
export default Router;
