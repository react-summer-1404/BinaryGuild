import React from "react";
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
  return instance.post("/Course/SetCourseRating", null, {
    params: {
      courseId: courseId,
      RateNumber: RateNumber,
    },
  });
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
export const AddCourseLike = ({ courseId }) => {
  return instance.post("Course/AddCourseLike", null, {
    params: {
      courseId: courseId,
    },
  });
};

export const AddCourseDisLike = ({ courseId }) => {
  return instance.post("/Course/AddCourseDissLike", null, {
    params: {
      courseId: courseId,
    },
  });
};

// Add like to comment
export const AddCourseCommentLike = ( CourseCommandId ) => {
  return instance.post("/Course/AddCourseCommentLike", null, {
    params: {
      CourseCommandId
    },
  });
};

// Add dislike to comment
export const AddCourseCommentDisLike = ( CourseCommandId ) => {
  return instance.post("/Course/AddCourseCommentDissLike", null, {
    params: {
      CourseCommandId
    },
  });
};


// Add to favorite blogs
export const AddfavoriteBlogs = ({ NewsId }) => {
  return instance.post("/News/AddFavoriteNews/" , null ,{
    params:{NewsId}
  });
};

// Add like && dislike comment
export const AddLikeBlogComments = ({ NewsId }) => {
  return instance.post(`/News/NewsLike/${NewsId}`);
};
export const AddDisLikeBlogComments = ({ NewsId }) => {
  return instance.post(`/News/NewsDissLike/:${NewsId}`);
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
