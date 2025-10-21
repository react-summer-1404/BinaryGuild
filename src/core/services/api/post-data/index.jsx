import React from "react";
import instance from "../../interceptor";

export const SendVerifyMessage = (phoneNumber) => {
  return instance.post("/Sign/SendVerifyMessage", { phoneNumber });
};

export const VerifyMessage = (verifyCode, phoneNumber) => {
  return instance.post("/Sign/VerifyMessage", { verifyCode, phoneNumber });
};

export const Register = ({ password, gmail, phoneNumber }) => {
  return instance.post("/Sign/Register", { password, gmail, phoneNumber });
};

export const Login = ({ phoneOrGmail, password, rememberMe }) => {
  return instance.post("/Sign/Login", { phoneOrGmail, password, rememberMe });
};

export const ForgetPass = async ({ email, baseUrl }) => {
  try{
     const response = await instance.post("/Sign/ForgetPassword", {
    email,
    baseUrl,
  });
  return response;
  }catch(error){
    console.log(error, "error")
    return{success: false , message: error?.response?.message || error.message }
  }
 
};
