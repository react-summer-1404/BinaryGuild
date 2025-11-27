import instance from "../../interceptor";

// export const DeleteFavoriteNews = (deleteEntityId) => {
//   return instance.delete("/News/DeleteFavoriteNews", {
//     params: { deleteEntityId: deleteEntityId },
//   });
// };

export const DeleteProfileImage = (DeleteEntityId) => {
  return instance.delete("/SharePanel/DeleteProfileImage", {
    params: { DeleteEntityId: DeleteEntityId },
  });
};
