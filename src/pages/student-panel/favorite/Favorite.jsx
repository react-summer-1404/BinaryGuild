import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Search2 from "../../../components/common/search-and-date/search/Search2";
import Favorites from "../../../components/common/table/favorites/Favorites";
import {
  GetFavoriteBlogs,
  GetFavoriteCourses
} from "../../../core/services/api/get-data";

const Favorite = () => {
  const { t } = useTranslation();
  const { data: favoriteCourses } = useQuery({
    queryKey: ["GET_FAV_BLOGS"],
    queryFn: GetFavoriteCourses,
  });
  console.log(favoriteCourses, "getCoursesFilter");
  const { data: favoriteBlogs } = useQuery({
    queryKey: ["GET_FAVORITE_BLOGS"],
    queryFn: GetFavoriteBlogs,
  });
  return (
    <div className="w-11/12 m-auto flex flex-wrap gap-6">
      <div className="w-full flex justify-start">
        <p className="text-text font-bold text-2xl">{t("FavBlogAndCourse")}</p>
      </div>
      <div className="flex flex-nowrap gap-4 w-1/3">
        <Search2 favoriteBlogsTitle={favoriteBlogs?.title} favoriteCoursesTitle={favoriteCourses?.title}  />
      </div>
      <Favorites favoriteBlogs={favoriteBlogs} favoriteCourses={favoriteCourses} />
    </div>
  );
};

export default Favorite;
