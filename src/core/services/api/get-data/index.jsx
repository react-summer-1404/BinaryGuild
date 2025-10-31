import instance from "../../interceptor";

export const GetCourse = (CourseId) => {
  return instance.get("/Home/GetCourseDetails", {
    params: { CourseId },
  });
};

export const GetCourseComments = (CourseId) => {
  return instance.get(`/Course/GetCourseComments`, {
    params: { CourseId:CourseId },
  });
};

export const GetAllCourses = (pageNumber=1, rowsOgPage=10)=>{
  return instance.get("/Course/CourseList", {
    params:{
      pageNumber:pageNumber,
      RowsOgPage:rowsOgPage,
      SortingCol:"DESC",
      SortType:"Expire",
      Query:"",
    }
  })
}

