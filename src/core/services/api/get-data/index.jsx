import React from "react";
import instance from "../../interceptor";

export const Reset = (ConfigValue) => {
  return instance.get(`/Sign/Reset/${ConfigValue}`);
};

const GetAllCourseByPagination = async (apiParams) => {
  try {
    const request = await http.get(`/Home/GetCoursesWithPagination`, {
      params: {
        Pagenumber : 1,
        Pagenumber : 1,
        Pagenumber : 1,
        Pagenumber : 1,

      },
    });

    return request;
  } catch (error) {
    return [];
  }
};
export default GetAllCourseByPagination;