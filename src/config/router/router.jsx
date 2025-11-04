import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../../components/layouts/AuthLayout";
import LandingLayout from "../../components/layouts/LandingLayout";
import RegisterWrapper from "../../../src/screen/authentication/RegisterWrapper";
import LoginWrapper from "../../../src/screen/authentication/LoginWrapper";
import ForgetPasswordWrapper from "../../../src/screen/authentication/ForgetPasswordWrapper";
import LandingWrapper from "../../../src/screen/landing-wrapper/LandingWrapper";
import StudentPanelLayout from "../../components/layouts/StudentPanelLayout";
import CourseDetailWrapper from "../../../src/screen/course-detail/CourseDetailWrapper"
import SetNewPassword from "../../pages/authorize/steps/SetNewPassword";
import BlogsDetailWrapper from "../../screen/blogs-detail/BlogsDetailWrapper";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      { path: "/", element: <LandingWrapper /> },
       { path: "courses/:id", element: <CourseDetailWrapper /> },
       { path: "blogs/:id", element: <BlogsDetailWrapper /> },

    ],
    
  },
 
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "register", element: <RegisterWrapper />},
      { path: "login", element: <LoginWrapper /> },
      { path: "forgetPassword", element: <ForgetPasswordWrapper /> },
      { path: "resetpassword/:resetValue", element: <SetNewPassword />, children:[] },

    ],
  },
  { path: "/student-panel", element: <StudentPanelLayout />, children: [] },
]);
export default Router;
