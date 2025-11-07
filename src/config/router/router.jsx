import { createBrowserRouter } from "react-router-dom";
import NotFound from "../../components/common/not-found-section/NotFound";
import AuthLayout from "../../components/layouts/AuthLayout";
import LandingLayout from "../../components/layouts/LandingLayout";
import BlogFav from "../../pages/student-panel/blog-fav/BlogFav";
import CourseFav from "../../pages/student-panel/course-fav/CourseFav";
import Dashboard from "../../pages/student-panel/dashboard/Dashboard";
import MyCourse from "../../pages/student-panel/my-courses/MyCourse";
import MyReserve from "../../pages/student-panel/my-reserve-course/MyReserve";
import UserProfile from "../../pages/student-panel/profile/UserProfile";
import ForgetPasswordWrapper from "../../screen/authentication/ForgetPasswordWrapper";
import LoginWrapper from "../../screen/authentication/LoginWrapper";
import RegisterWrapper from "../../screen/authentication/RegisterWrapper";
import LandingWrapper from "../../screen/landing-wrapper/LandingWrapper";
import PanelWrapper from "../../screen/panel-wrapper/PanelWrapper";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [{ index : true, element: <LandingWrapper /> }],
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
      {index:true , element: <Dashboard/> },
      {path: "my-courses", element: <MyCourse/> },
      {path:"reserve-course" , element: <MyReserve/>},
      {path:"profile" , element:<UserProfile/>},
      {path:"course-fav" , element:<CourseFav/>},
      {path:"blog-fav" , element:<BlogFav/>}
    ],
  },
  {path:"*" , element: <NotFound/> },
]);
export default Router;
