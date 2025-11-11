import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import BlogsWrapper from "../../screen/blogs-wrapper/BlogsWrapper";
import UserManagement from "../../pages/admin-panel/UserManagement";
import Support from "../../pages/admin-panel/Support";
// Layouts
const AuthLayout = lazy(() => import("../../components/layouts/AuthLayout"));
const LandingLayout = lazy(() =>
  import("../../components/layouts/LandingLayout")
);
const StudentPanelLayout = lazy(() =>
  import("../../components/layouts/StudentPanelLayout")
);
const AdminPanelLayout = lazy(() =>
  import("../../components/layouts/AdminPanelLayout")
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
const CourseFav = lazy(() =>
  import("../../pages/student-panel/course-fav/CourseFav")
);
const BlogFav = lazy(() =>
  import("../../pages/student-panel/blog-fav/BlogFav")
);

//admin panel

const AdminDashboard = lazy(() =>
  import("../../pages/admin-panel/AdminDashboard")
);
const AdminUserManagement = lazy(() =>
  import("../../pages/admin-panel/UserManagement")
);
const AdminBlogsManagement = lazy(() =>
  import("../../pages/admin-panel/BlogsManagement")
);
const AdminCoursesManagement = lazy(() =>
  import("../../pages/admin-panel/CoursesManagement")
);
const AdminCommentsManagement = lazy(() =>
  import("../../pages/admin-panel/CommentsManagement")
);
const AdminSetting = lazy(() =>
  import("../../pages/admin-panel/Settings")
);
const AdminSupport = lazy(() =>
  import("../../pages/admin-panel/Support")
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
      { path: "profile", element: <UserProfile /> },
      { path: "course-fav", element: <CourseFav /> },
      { path: "blog-fav", element: <BlogFav /> },
    ],
  },

  {
    path: "/admin-panel",
    element: <AdminPanelLayout />,
    children: [
      { path:"admin-panel",  element: <AdminDashboard /> },
      { path:"User-management" , element: <AdminUserManagement /> },
      { path:"Blogs-management" , element: <AdminBlogsManagement /> },
      { path:"Courses-management" , element: <AdminCoursesManagement /> },

      { path:"comments-management" , element: <AdminCommentsManagement /> },
      { path:"Supports" , element: <AdminSupport /> },
      { path:"Setting" , element: <AdminSetting /> },

    ],
  },

  { path: "*", element: <NotFound /> },
]);
export default Router;
