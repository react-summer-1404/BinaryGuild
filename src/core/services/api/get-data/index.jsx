import instance from "../../interceptor";
export const GetCourse = (CourseId) => {
  return instance.get("/Home/GetCourseDetails", {
    params: { CourseId },
  });
};

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


export const Reset = (ConfigValue) => {
  return instance.get(`/Sign/Reset/${ConfigValue}`);
};

export const TopCoursesData = () => {
  return instance.get("/Home/GetCoursesTop?Count=4");
};

export const UserData = () => {
  return instance.get(`/SharePanel/GetProfileInfo`);
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