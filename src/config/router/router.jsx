import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../../components/layouts/AuthLayout";
import LandingLayout from "../../components/layouts/LandingLayout";
import Courses from "../../pages/Courses";
import ForgetPasswordWrapper from '../../../src/screen/authentication/ForgetPasswordWrapper'
import LoginWrapper from '../../../src/screen/authentication/LoginWrapper'
import RegisterWrapper from '../../../src/screen/authentication/RegisterWrapper'
import LandingWrapper from "../../screen/landing-wrapper/LandingWrapper";
import StudentPanelLayout from "../../components/layouts/StudentPanelLayout";
import CourseDetailWrapper from "../../../src/screen/course-detail/CourseDetailWrapper"
import SetNewPassword from "../../pages/authorize/steps/SetNewPassword";
import BlogsDetailWrapper from "../../screen/blogs-detail/BlogsDetailWrapper";
import MyCourse from "../../pages/student-panel/my-courses/MyCourse";
import Dashboard from "../../pages/student-panel/dashboard/Dashboard";
import MyReserve from "../../pages/student-panel/my-reserve-course/MyReserve";
import UserProfile from "../../pages/student-panel/profile/UserProfile";
import CourseFav from "../../pages/student-panel/course-fav/CourseFav";
import BlogFav from "../../pages/student-panel/blog-fav/BlogFav";

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
  {
    path: "/panel",
    element: <StudentPanelLayout />,
    children: [
      { path: "my-panel", element: <MyCourse/> },
      { path: "", element: <Dashboard/> },
      {path:"reserve-course" , element: <MyReserve/>},
      {path:"profile" , element:<UserProfile/>},
      {path:"course-fav" , element:<CourseFav/>},
      {path:"blog-fav" , element:<BlogFav/>}
    ],
  },
]);
export default Router;
