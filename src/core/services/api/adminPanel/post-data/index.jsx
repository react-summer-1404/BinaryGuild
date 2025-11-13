import instance from "../../../interceptor";

export const addUser = (
  lastName,
  firstName,
  gmail,
  password,
  phoneNumber,
  isStudent,
  isTeacher
) => {
  return instance.post("/User/CreateUser", {
    lastName,
    firstName,
    gmail,
    password,
    phoneNumber,
    isStudent,
    isTeacher,
  });
};
