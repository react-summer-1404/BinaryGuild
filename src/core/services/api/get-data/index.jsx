import http from "../../interceptor"
export const GetCourse = (CourseId) => {
  return http.get("/Home/GetCourseDetails", {
    params: { CourseId },
  });
};

export const GetCourseComments = (CourseId) => {
  console.log(CourseId)
  return http.get(`/Course/GetCourseCommnets/${CourseId}`, {
    // params: { CourseId },
  });
};

export const GetAllCourses = (pageNumber=1, rowsOgPage=10)=>{
  return http.get("/Course/CourseList", {
    params:{
      pageNumber:pageNumber,
      RowsOgPage:rowsOgPage,
      SortingCol:"DESC",
      SortType:"Expire",
      Query:"",
    }
  })
}

export const GetBlogs = (id) => {
  return http.get("/News", {
    params: { id },
  });
};
