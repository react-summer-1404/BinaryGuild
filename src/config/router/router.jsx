import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

// Layouts
const AuthLayout = lazy(() => import("../../components/layouts/AuthLayout"));
const LandingLayout = lazy(() => import('../../components/layouts/LandingLayout'));
const StudentPanelLayout = lazy(() => import("../../components/layouts/StudentPanelLayout"));

// Pages
const ForgetPasswordWrapper = lazy(() => import("../../screen/authentication/ForgetPasswordWrapper"));
const LoginWrapper = lazy(() => import("../../screen/authentication/LoginWrapper"));
const RegisterWrapper = lazy(() => import("../../screen/authentication/RegisterWrapper"));
const LandingWrapper = lazy(() => import("../../screen/landing-wrapper/LandingWrapper"));
const CourseDetailWrapper = lazy(() => import("../../screen/course-detail/CourseDetailWrapper"));
const SetNewPassword = lazy(() => import("../../pages/authorize/steps/SetNewPassword"));
const BlogsDetailWrapper = lazy(() => import("../../screen/blogs-detail/BlogsDetailWrapper"));

// Student Panel
const MyCourse = lazy(() => import("../../pages/student-panel/my-courses/MyCourse"));
const Dashboard = lazy(() => import("../../pages/student-panel/dashboard/Dashboard"));
const MyReserve = lazy(() => import("../../pages/student-panel/my-reserve-course/MyReserve"));
const UserProfile = lazy(() => import("../../pages/student-panel/profile/UserProfile"));
const CourseFav = lazy(() => import("../../pages/student-panel/course-fav/CourseFav"));
const BlogFav = lazy(() => import("../../pages/student-panel/blog-fav/BlogFav")); 

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      { index : true, element: <LandingWrapper /> },
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
