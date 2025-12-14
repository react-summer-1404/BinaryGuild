import instance from "../../interceptor";

export const GetCourseComments = (CourseId) => {
  // console.log(CourseId);
  return instance.get(`/Course/GetCourseCommnets/${CourseId}`, {});
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

//get blogs reply comment

export const GetBlogsCommentsReply = (id) => {
  return instance.get("/News/GetRepliesComments", {
    params: {
      Id: id,
    },
  });
};

// get course groups

export const GetCourseTech = () => {
  return instance.get("/Home/GetTechnologies");
};

// get course groups

export const GetCourseGroup = (TeacherId, CourseId) => {
  return instance.get(`/CourseGroup/GetCourseGroup?TeacherId=${TeacherId}&CourseId=${CourseId}`);
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

export const TopCoursesData = async () => {
  return instance.get("/Home/GetCoursesTop?Count=4");
};

export const UserData = async () => {
  try {
    const response = await instance.get("/SharePanel/GetProfileInfo");
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
      "/SharePanel/GetMyCourses"
    );
    return response.listOfMyCourses;
  } catch (error) {
    console.log(error);
  }
};
export const UserReserve = async () => {
  try {
    const response = await instance("/SharePanel/GetMyCoursesReserve");
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const UserCoursesComments = async () => {
  try {
    const response = await instance.get("/Course/GetCourseCommnets/t5");
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const UserBlogsComments = async () => {
  const response = await instance.get("/News/GetNewsComments?NewsId=6600106f-83d7-4424-a660-136850b1b050");
  return response;
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
  try {
    const response = await instance.get("/Home/GetCoursesWithPagination", {
      params: { ...params },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};


export const GetCoursesLevel = async () => {
  try {
    const response = await instance.get("/CourseLevel/GetAllCourseLevel");
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const GetCoursesTeacher = async () => {
  try {
    const response = await instance.get("/Home/GetTeachers");
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const GetBlogsData = async ({ params }) => {
  try {
    const response = await instance.get("/News", { params: { ...params } });
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

export const GetBlogsCategory = async () => {
  try {
    const response = await instance.get("/News/GetListNewsCategory");
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const Reset = (ConfigValue) => {
  return instance.get(`/Sign/Reset/${ConfigValue}`);
};

export const GetFavoriteBlogs = async () => {
  try {
    const response = await instance.get("/SharePanel/GetMyFavoriteNews");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const GetFavoriteCourses = async () => {
  try {
    const response = await instance.get("/SharePanel/GetMyFavoriteCourses");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const GetAllUserCourses = async ({ params }) => {
  try {
    const response = await instance.get("/SharePanel/GetMyCourses?", {
      params: { ...params },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const GetBlogsDetail = (Id) => {
  const response = instance.get(`/News/${Id}`);
  return response.detailsNewsDto;
};


export const PatchCoursePayment = (reserveId) => {
  const response = instance.get(`/NewVersion/CoursePayment/StepOneToPay/${reserveId}`);
  return response;
};
