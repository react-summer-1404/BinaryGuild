import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Search from "../../../components/common/search-and-date/search/Search";
import CourseTable from "../../../components/common/table/course-table/CourseTable";
import { GetCourses } from "../../../core/services/api/get-data";

const MyCourse = () => {
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
        <p className="text-text font-bold text-2xl">{t("MenuText2")}</p>
      </div>
      <div className="flex flex-nowrap gap-4 w-1/3">
      <Search setFilter={setFilter}/>
      </div>
      <CourseTable />
    </div>
  );
};

export default MyCourse;
