import instance from "../../interceptor";

export const SendVerifyMessage = (gmail) => {
  return instance.post("/Sign/SendVerifyMessage", { gmail });
};

export const VerifyMessage = (gmail, verifyCode) => {
  return instance.post("/Sign/VerifyMessage", { gmail, verifyCode });
};

export const Register = ({ password, gmail, phoneNumber }) => {
  return instance.post("/Sign/Register", { password, gmail, phoneNumber });
};

export const Login = ({ phoneOrGmail, password, rememberMe }) => {
  return instance.post("/Sign/Login", { phoneOrGmail, password, rememberMe });
};

export const ForgetPass = async ({ email, baseUrl }) => {
  try {
    const response = await instance.post("/Sign/ForgetPassword", {
      email,
      baseUrl,
    });
    return response;
  } catch (error) {
    console.log(error, "error");
    return {
      success: false,
      message: error?.response?.message || error.message,
    };
  }
};

export const ResetPassword = ({ gmail, newPassword, resetValue }) => {
  return instance.post("/Sign/Reset", { gmail, newPassword, resetValue });
};

// course rating
export const CourseRating = ({ courseId, RateNumber }) => {
  return instance.post(
    `/Course/SetCourseRating?CourseId=${courseId}&RateNumber=${RateNumber}`
  );
};

// reserve course

export const AddReserveCourse = ({ courseId }) => {
  return instance.post("/CourseReserve/ReserveAdd", { courseId });
};

// Add to favorite course
export const AddfavoriteCourse = ({ courseId }) => {
  return instance.post("/Course/AddCourseFavorite", { courseId });
};

// Add Like && Dislike for Course
export const AddCourseLike = (courseId) => {
  return instance.post(`/Course/AddCourseLike?CourseId=${courseId}`);
};

export const AddCourseDisLike = ({ courseId }) => {
  return instance.post(`/Course/AddCourseDissLike?CourseId=${courseId}`);
};

// Add like to comment
export const AddCourseCommentLike = (CourseCommandId) => {
  return instance.post("/Course/AddCourseCommentLike", null, {
    params: {
      CourseCommandId,
    },
  });
};

// Add dislike to comment
export const AddCourseCommentDisLike = (CourseCommandId) => {
  return instance.post("/Course/AddCourseCommentDissLike", null, {
    params: {
      CourseCommandId,
    },
  });
};

// Add post reply comment

export const AddReplyCourseComment = (CommentId, CourseId, Title, Describe) => {
  const FormData = new FormData();
  FormData.append("CommentId", CommentId);
  FormData.append("CourseId", CourseId);
  FormData.append("Title", Title);
  FormData.append("Describe", Describe);
  return instance.post("/Course/AddReplyCourseComment", FormData);
};

// Add to favorite blogs
export const AddfavoriteBlogs = ({ NewsId }) => {
  return instance.post("/News/AddFavoriteNews/", null, {
    params: { NewsId },
  });
};

// Add like && dislike comment
export const AddLikeBlogComments = ({ NewsId }) => {
  return instance.post(`/News/NewsLike/${NewsId}`);
};
export const AddDisLikeBlogComments = ({ NewsId }) => {
  return instance.post(`/News/NewsDissLike/${NewsId}`);
};

//blogs rating
export const AddBlogsRating = ({ NewsId, RateNumber }) => {
  return instance.post("/News/NewsRate", null, {
    params: {
      NewsId: NewsId,
      RateNumber: RateNumber,
    },
  });
};

// Add Like && Dislike for Course
export const AddBlogsLike = ({ CommentId, LikeType }) => {
  return instance.post(`/News/CommentLike/${CommentId}`, null, {
    params: {
      LikeType: LikeType,
    },
  });
};

export const AddBlogsDissLike = (NewsId) => {
  return instance.post("/News/NewsDissLike/", null, {
    params: {
      NewsId: NewsId,
    },
  });
};

export const AddProfileImage = (formFile) => {
  return instance.post("/SharePanel/AddProfileImage", {
    params: { formFile: formFile },
  });
};

export const SelectProfileImage = (ImageId) => {
  return instance.post("/SharePanel/SelectProfileImage", {
    params: { ImageId: ImageId },
  });
};
