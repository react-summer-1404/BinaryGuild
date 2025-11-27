import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReserveOrder from "../../../components/common/data-order/ReserveOrder";
import Search from "../../../components/common/search-and-date/search/Search";
import ReserveTable from "../../../components/common/table/reserve-table/ReserveTable";
import { GetCourses } from "../../../core/services/api/get-data";

const MyReserve = () => {
  const { t } = useTranslation();

  const [filter, setFilter] = useState({
    PageNumber: 1,
    RowsOfPage: 8,
    SortingCol: "Active",
    SortType: "desc",
  });
  const { data: getCoursesFilter, refetch: coursesFilter } = useQuery({
    queryKey: ["GET_COURSE_FILTER"],
    queryFn: () => GetCourses({ params: filter }),
  });
  console.log(getCoursesFilter, "getCoursesFilter");
  useEffect(() => {
    if (filter) {
      console.log("object", filter);
      coursesFilter();
    }
  }, [filter]);
  return (
    <div className="w-11/12 m-auto flex flex-wrap gap-6">
      <div className="w-full flex justify-start">
        <p className="text-text font-bold text-2xl">{t("MenuText3")}</p>
      </div>
      <div className="flex flex-nowrap gap-4 w-5/6">
      <div className="w-1/3">
        <Search setFilter={setFilter} /></div>
        <div className=" mt-6">
        <ReserveOrder setFilter={setFilter}/></div>
      </div>
      <ReserveTable />
    </div>
  );
};

export default MyReserve;
