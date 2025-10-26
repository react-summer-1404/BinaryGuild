import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "../../components/layouts/LandingLayout";
import RegisterWrapper from "../../screen/authentication/pages/RegisterWrapper";
import LoginWrapper from "../../screen/authentication/pages/LoginWrapper";
import AuthLayout from "../../components/layouts/AuthLayout";
import ForgetPasswordWrapper from "../../screen/authentication/pages/ForgetPasswordWrapper";
import Landing from "../../pages/landing/Landing";
import { CourseDetailPage } from "../../screen/courses/courseDetail/CourseDetailPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [{ path: "/", element: <Landing /> },
      { path: "courses/:id", element: <CourseDetailPage /> }
    ],
    {
      path: "/",
      element: <Courses.page />,
      children: [{ path: "/", element: <Courses /> }],
    },],
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
