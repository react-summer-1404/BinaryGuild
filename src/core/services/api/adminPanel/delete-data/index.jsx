import instance from "../../../interceptor";

export const deleteUsers = (userId) => {
  return instance.delete("/User/DeleteUser", {
    userId
});
};


