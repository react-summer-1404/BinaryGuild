import instance from "../../../interceptor";

export const usersList = async (
  pageNumber = 1,
  rowsOgPage = 10,
  IsActiveUser = true,
  IsDeletedUser = true,
  roleId = "",
) => {
    
  try {
    const response = await instance.get("/User/UserMannage", {
      params: {
        pageNumber: pageNumber,
        RowsOgPage: rowsOgPage,
        SortingCol: "DESC",
        SortType: "InsertDate",
        Query: "",
        IsActiveUser,
        IsDeletedUser,
        roleId,
      },
    });
    console.log("response user list:", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
