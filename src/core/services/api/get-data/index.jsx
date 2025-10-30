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
