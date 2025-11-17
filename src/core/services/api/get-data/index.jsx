import instance from "../../interceptor";

export const GetCourseComments = (CourseId) => {
  console.log(CourseId);
  return instance.get(`/Course/GetCourseCommnets/${CourseId}`, {
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

//get related courses


export const GetCourseTech = () => {
  return instance.get("/Home/GetTechnologies");
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
//related blogs
export const GetRelatedBlogs = (id) => {
  return instance.get(`/News/GetNewsCategory/${id}`);
};

//get blogs reply comment

export const GetBlogsCommentsReply = (id) => {
  return instance.get("/News/GetRepliesComments", {
    params: {
      Id: id,
    },

  });
};





export const TopCoursesData =async () => {
  return instance.get("/Home/GetCoursesTop?Count=4");
};

export const UserData = async () => {
  try {
    const response = await instance.get("/SharePanel/GetProfileInfo");
    console.log("response profile:" ,response);
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
export const UserCourses = async () => {
  try {
    const response = await instance(
      "/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=4&SortingCol=desc&SortType=LastUpdate&Query="
    );
    return response.listOfMyCourses;
  } catch (error) {
    console.log(error);
  }
};
export const UserReserve = async () => {
  try {
    const response = await instance("/SharePanel/GetMyCoursesReserve");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const UserComments = async () => {
  try {
    const response = await instance("/Course/GetCourseCommnets/t4");
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const GetCourse = (CourseId) => {
  return instance.get(`/Home/GetCourseDetails?CourseId=${CourseId}`);
};
export const GetCourseDetail = (CourseId) => {
  return instance.get("/Home/GetCourseDetails", {
    params: { CourseId },
  });
};
export const GetCourses = async ({ params }) => {
  console.log("params : ",params)
  try {
    const response = await instance.get(
      "/Home/GetCoursesWithPagination",
      { params: {...params} }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const GetCoursesLevel = async () => {
  try {
    const response = await instance.get(
      "/CourseLevel/GetAllCourseLevel"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const GetCoursesTeacher = async () => {
  try {
    const response = await instance.get(
      "/Home/GetTeachers"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const GetBlogsData = async ({ params }) => {
  try {
    const response = await instance.get(
      "/News" ,
      { params: {...params} }
    );
    return response.news;
  } catch (error) {
    console.log(error);
  }
};

export const GetCategory = async () => {
  try {
    const response = await instance.get("/Home/GetTechnologies");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const Reset = (ConfigValue) => {
  return instance.get(`/Sign/Reset/${ConfigValue}`);
};


