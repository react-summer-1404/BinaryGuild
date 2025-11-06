import instance from "../../interceptor";

export const Reset = (ConfigValue) => {
  return instance.get(`/Sign/Reset/${ConfigValue}`);
};

export const TopCoursesData = () => {
  return instance.get("/Home/GetCoursesTop?Count=4");
};

export const UserData = async () => {
  try {
    const response = await instance.get("/SharePanel/GetProfileInfo");
    console.log(response)
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const UseGetTopBlogs = async () => {
  try {
    const response = await instance.get(
      "/News?PageNumber=1&RowsOfPage=3&SortingCol=insertDate&SortType=desc"
    );

    return response.news;
  } catch (error) {
    console.log(error);
  }
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
export const GetCourse = (CourseId) => {
  return instance.get(`/Home/GetCourseDetails?CourseId=${CourseId}`);
};
