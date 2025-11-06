import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../../components/layouts/AuthLayout";
import LandingLayout from "../../components/layouts/LandingLayout";
import Courses from "../../pages/Courses";
import ForgetPasswordWrapper from "../../screen/authentication/pages/ForgetPasswordWrapper";
import LoginWrapper from "../../screen/authentication/pages/LoginWrapper";
import RegisterWrapper from "../../screen/authentication/pages/RegisterWrapper";
import LandingWrapper from "../../screen/landing-wrapper/LandingWrapper";
import StudentPanelLayout from "../../components/layouts/StudentPanelLayout";
import MyCourse from "../../pages/student-panel/my-courses/MyCourse";
import Dashboard from "../../pages/student-panel/dashboard/Dashboard";
import MyReserve from "../../pages/student-panel/my-reserve-course/MyReserve";
import UserProfile from "../../pages/student-panel/profile/UserProfile";
import CourseFav from "../../pages/student-panel/course-fav/CourseFav";
import BlogFav from "../../pages/student-panel/blog-fav/BlogFav";
import PanelWrapper from "../../screen/panel-wrapper/PanelWrapper";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [{ path: "/", element: <LandingWrapper /> }],
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
  {
    path: "/panel",
    element: <PanelWrapper />,
    children: [
      { path: "my-courses", element: <MyCourse/> },
      { path: "", element: <Dashboard/> },
      {path:"reserve-course" , element: <MyReserve/>},
      {path:"profile" , element:<UserProfile/>},
      {path:"course-fav" , element:<CourseFav/>},
      {path:"blog-fav" , element:<BlogFav/>}
    ],
  },
]);
export default Router;
