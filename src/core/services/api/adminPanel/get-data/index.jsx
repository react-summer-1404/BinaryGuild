import instance from "../../../interceptor";

export const usersList = async (
  pageNumber = 10,
  rowsOfPage = 1000,
  IsActiveUser = true,
  IsDeletedUser = true,
  roleId = ""
) => {
  try {
    const response = await instance.get("/User/UserMannage", {
      params: {
        pageNumber,
        RowsOfPage: rowsOfPage,
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

export const getAllCommentsAccepted = async (PageNumber= 1, RowsOfPage= 100,Accept="",TeacherId="",userId="",) => {
  try {
    const response = await instance.get("/Course/CommentManagment", {
      params: {
        PageNumber,
        RowsOfPage,
        SortingCol:"desc",
        SortType:"InsertDate",
        Query:"",
        Accept,
        TeacherId,
        userId
      },
    });
    console.log("response all comments" ,response)
    return response;
  } catch (error) {
    console.log(error)
  }
};
