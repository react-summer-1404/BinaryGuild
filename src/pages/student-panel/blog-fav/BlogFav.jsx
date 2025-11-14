import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { GetCourses } from '../../../core/services/api/get-data';
import SearchAndDate from '../../../components/common/search-and-date/SearchAndDate';
import FavBlog from '../../../components/common/table/fav-blog/FavBlog';

const BlogFav = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState({
    PageNumber: 1,
    RowsOfPage: 8,
    SortingCol: "Active",
    SortType: "desc",
  });
  const { data: getCoursesFilter , refetch: coursesFilter } = useQuery({
    queryKey: ["GET_COURSE_FILTER"],
    queryFn: () => GetCourses({ params: filter }),
  });
  console.log(getCoursesFilter , "getCoursesFilter")
  useEffect(() => {
    if (filter) {
      console.log('object',filter)
      coursesFilter();
    }
  }, [filter]);
  return (
    <div className="w-11/12 m-auto flex flex-wrap gap-6">
      <div className="w-full flex justify-start">
        <p className="text-text font-bold text-2xl">{t("MenuText5")}</p>
      </div>
      <div className="flex flex-nowrap gap-4 w-1/2">
      <SearchAndDate setFilter={setFilter}/>
      </div>
      <FavBlog/>
    </div>
  )
}

export default BlogFav
