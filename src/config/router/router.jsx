import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// Layouts
const AuthLayout = lazy(() => import("../../components/layouts/AuthLayout"));
const LandingLayout = lazy(() =>
  import("../../components/layouts/LandingLayout")
);
const StudentPanelLayout = lazy(() =>
  import("../../components/layouts/StudentPanelLayout")
);

// Pages
const ForgetPasswordWrapper = lazy(() =>
  import("../../screen/authentication/ForgetPasswordWrapper")
);
const LoginWrapper = lazy(() =>
  import("../../screen/authentication/LoginWrapper")
);
const RegisterWrapper = lazy(() =>
  import("../../screen/authentication/RegisterWrapper")
);
const LandingWrapper = lazy(() =>
  import("../../screen/landing-wrapper/LandingWrapper")
);
const CourseDetailWrapper = lazy(() =>
  import("../../screen/course-detail/CourseDetailWrapper")
);
const SetNewPassword = lazy(() =>
  import("../../pages/authorize/steps/SetNewPassword")
);
const CoursesWrapper = lazy(() =>
  import("../../screen/courses-wrapper/CoursesWrapper")
);
const BlogsDetailWrapper = lazy(() =>
  import("../../screen/blogs-detail/BlogsDetailWrapper")
);
const BlogsWrapper = lazy(() =>
  import("../../screen/blogs-wrapper/BlogsWrapper")
);
const BlogDetail = lazy(() =>
  import("../../components/common/details/blog/BlogDetail")
);
const CourseDetail = lazy(() =>
  import("../../components/common/details/course/CourseDetail")
);

// Student Panel
const MyCourse = lazy(() =>
  import("../../pages/student-panel/my-courses/MyCourse")
);
const Dashboard = lazy(() =>
  import("../../pages/student-panel/dashboard/Dashboard")
);
const MyReserve = lazy(() =>
  import("../../pages/student-panel/my-reserve-course/MyReserve")
);
const UserProfile = lazy(() =>
  import("../../pages/student-panel/profile/UserProfile")
);
const Favorite = lazy(() =>
  import("../../pages/student-panel/favorite/Favorite")
);

// Profile Section
const HomeAddressSection = lazy(() =>
  import(
    "../../pages/student-panel/profile/home-address-section/HomeAddressSection"
  )
);
const LinksSection = lazy(() =>
  import("../../pages/student-panel/profile/links-section/LinksSection")
);
const ImagesSection = lazy(() =>
  import("../../pages/student-panel/profile/images-section/ImagesSection")
);
const InformationSection = lazy(() =>
  import(
    "../../pages/student-panel/profile/information-section/InformationSection"
  )
);

//Not Found
const NotFound = lazy(() =>
  import("../../components/common/not-found-section/NotFound")
);

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      { index: true, element: <LandingWrapper /> },
      { path: "courses-page", element: <CoursesWrapper /> },
      { path: "blogs-page", element: <BlogsWrapper /> },
      { path: "courses-page/:id", element: <CourseDetailWrapper /> },
      { path: "blogs-page/:id", element: <BlogsDetailWrapper /> },
    ],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "register", element: <RegisterWrapper /> },
      { path: "login", element: <LoginWrapper /> },
      { path: "forgetPassword", element: <ForgetPasswordWrapper /> },
      { path: "resetpassword/:resetValue", element: <SetNewPassword /> },
    ],
  },
  {
    path: "/panel",
    element: <StudentPanelLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "my-courses", element: <MyCourse /> },
      { path: "reserve-course", element: <MyReserve /> },
      {
        path: "profile",
        element: <UserProfile />,
        children: [
          { index: true , element: <InformationSection /> },
          { path: "images", element: <ImagesSection /> },
          { path: "homeAddress", element: <HomeAddressSection /> },
          { path: "links", element: <LinksSection/> },
        ],
      },
      { path: "fav-courses-and-news", element: <Favorite /> },
      { path: "/panel/:id", element: <BlogDetail /> },
      { path: "/panel/:id", element: <CourseDetail /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
export default Router;
