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

export const UserDetail = async (UserId ) => {
  try {
    const response = await instance.get(`/User/UserDetails/${UserId}`);
    console.log("response user list:", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};



export const GetAllComments = async ({
  PageNumber = 1,
  RowsOfPage = 100,
  Accept = "",
  TeacherId = "",
  userId = "",
}) => {
  try {
    const response = await instance.get("/Course/CommentManagment", {
      params: {
        PageNumber,
        RowsOfPage,
        SortingCol: "DESC",
        SortType: "InsertDate",
        Query: "",
        Accept,
        TeacherId,
        userId,
      },
    });
    console.log(" all comments for admin", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const GetAllTeachers = async () => {
  try {
    const response = await instance.get("/Home/GetTeachers");
    console.log(" all teachers", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// get courses payment

export const GetCoursesPayment = async () => {
  try {
    const response = await instance.get("/CoursePayment");
    console.log(" course payments:", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};


// get news list

export const GetNewsList = async ({
  PageNumber = 1,
  RowsOfPage = 100,
  Accept = "",
}) => {
  try {
    const response = await instance.get("/News/AdminNewsFilterList", {
      params: {
        PageNumber,
        RowsOfPage,
        SortingCol: "InsertDate",
        SortType: "DESC",
        Query: "",
        Accept,

      },
    });
    console.log(" all news", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};