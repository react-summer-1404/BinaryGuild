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
export const CourseRating = ({ CourseId, RateNumber }) => {
  return instance.post("/Course/SetCourseRating", null, {
    params: {
      CourseId: CourseId,
      RateNumber: RateNumber,
    },
  });
};

// reserve course

export const AddReserveCourse = ({courseId}) => {
  return instance.post("/CourseReserve/ReserveAdd", {courseId});
};

// Add to favorite
export const AddfavoriteCourse = ({courseId}) => {
  return instance.post("/Course/AddCourseFavorite", {courseId});
};

// Add Like && Dislike for Course
export const AddCourseLike = ({ CourseId }) => {
  return instance.post("Course/AddCourseLike", null, {
    params: {
      CourseId: CourseId,
    },
  });
};

export const AddCourseDisLike = ({ CourseId }) => {
  return instance.post("/Course/AddCourseDissLike", null, {
    params: {
      CourseId: CourseId,
    },
  });
};