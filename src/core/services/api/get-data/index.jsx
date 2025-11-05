import instance from "../../interceptor";
export const GetCourse = (CourseId) => {
  return instance.get("/Home/GetCourseDetails", {
    params: { CourseId },
  });
};

export const GetCourseComments = (CourseId) => {
  console.log(CourseId);
  return instance.get(`/Course/GetCourseCommnets/${CourseId}`, {
    // params: { CourseId },
  });
};

export const GetAllCourses = (pageNumber = 1, rowsOgPage = 10) => {
  return instance.get("/Course/CourseList", {
    params: {
      pageNumber: pageNumber,
      RowsOgPage: rowsOgPage,
      SortingCol: "DESC",
      SortType: "Expire",
      Query: "",
    },
  });
};

export const GetBlogs = (id) => {
  return instance.get(`/News/${id}`);
};

export const GetBlogsComments = (NewsId) => {
  return instance.get("/News/GetNewsComments", {
    params: {
      NewsId: NewsId,
    },
  });
};

export const GetReplyCourseComment = (CourseId, CommentId) => {
  return instance.get("/News/GetNewsComments", {
    params: {
      CourseId: CourseId,
      CommentId: CommentId,
    },
  });
};


// const GetAllCourseByPagination = async (apiParams) => {
//   try {
//     const request = await http.get(`/Home/GetCoursesWithPagination`, {
//       params: {
//         Pagenumber : 1,
//         Pagenumber : 1,
//         Pagenumber : 1,
//         Pagenumber : 1,

//       },
//     });

//     return request;
//   } catch (error) {
//     return [];
//   }
// };
// export default GetAllCourseByPagination;