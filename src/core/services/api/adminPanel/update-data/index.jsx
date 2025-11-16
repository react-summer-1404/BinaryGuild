import instance from "../../../interceptor";

// edit users data

export const editUser = ({
  id,
  fName,
  lName,
  userName,
  nationalCode,
  phoneNumber,

  gmail,
}) => {
  return instance.put("/User/UpdateUser", {
    id,
    fName,
    lName,
    userName,
    nationalCode,
    phoneNumber,

    gmail,
  });
};

export const switchActiveness = (id,active) => {
  return instance.put("/User/UpdateUser", {id,active});
  
};
