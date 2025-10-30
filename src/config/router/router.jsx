import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../../components/layouts/AuthLayout";
import LandingLayout from "../../components/layouts/LandingLayout";
import RegisterWrapper from "../../screen/authentication/pages/RegisterWrapper";
import LoginWrapper from "../../screen/authentication/pages/LoginWrapper";
import ForgetPasswordWrapper from "../../screen/authentication/pages/ForgetPasswordWrapper";
import Landing from "../../pages/landing/Landing";
import { CourseDetailPage } from "../../screen/courses/courseDetail/CourseDetailPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [{ path: "/", element: <LandingWrapper /> },
    ],
  },
  { 
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "register", element: <RegisterWrapper  /> },
      { path: "login", element: <LoginWrapper  /> },
      { path: "forgetPassword", element: <ForgetPasswordWrapper  /> },
    ],
  },{path:"/student-panel" , element:<StudentPanelLayout/> ,children:[]}
]);
export default Router;
