import instance from "../../interceptor";

export const Delete = () => {
  return instance.delete("/News/DeleteFavoriteNews");
};