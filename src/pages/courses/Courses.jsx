import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { GetCourses } from "../../core/services/api/get-data";
import CourseCategory from "./filter-section/CourseCategory";
import CoursesOrder from "../../components/common/data-order/CoursesOrder";

const Courses = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState({
    PageNumber: 1,
    RowsOfPage: 8,
    SortingCol: "Active",
    SortType: "desc",
  });
  const { data: coursesData, refetch: refetchCoursesData } = useQuery({
    queryKey: ["GET_COURSES_DATA"],
    queryFn: () => GetCourses({ params: filter }),
  });
  console.log(coursesData, "coursesData");
  useEffect(() => {
    if (filter) {
      console.log("objectmskmcskamc", filter);
      refetchCoursesData();
    }
  }, [filter]);
  return (
    <>
      <div className="flex flex-wrap gap-2">
        <div className="w-full m-auto flex flex-wrap gap-6 mt-12 mb-12  ">
          <h2 className="text-text w-4/6 pl-24 m-auto text-[40px] font-bold">
            {t("TextCoursesHeader")}
          </h2>
          <p className="text-muted w-2/6 pr-9 pl-[140px] m-auto">
            {t("TextCourses")}
          </p>
        </div>
        <div className="w-1/6 border-3 hidden lg:block rounded-4xl h-[600px] border-gray-0">
          <CourseCategory
            setFilter={setFilter}
            coursesData={coursesData?.courseFilterDtos}
          />
        </div>
        <div className="flex flex-wrap w-4/5 m-auto gap-6">
          <div className="w-full items-start ">
            <CoursesOrder setFilter={setFilter} />
          </div>
          <div className="lg:flex lg:flex-wrap grid-cols-1 w-3/4 lg:w-full m-auto gap-6">
            {coursesData?.courseFilterDtos?.length ? (
              coursesData?.courseFilterDtos?.map((value) => {
                return (
                  <Link
                    to={`/courses-page/${value.courseId}`}
                    className="w-1/4"
                  >
                    <div
                      key={value.id}
                      className="flex flex-wrap col-[3] w-full"
                    >
                      <img
                        src={value.imageAddress}
                        className="rounded-4xl w-full"
                      />
                      <div className="w-11/12 m-auto">
                        <p className="w-full text-2xl font-bold text-text text-start">
                          {value.title}
                        </p>
                        <div className="w-full flex flex-nowrap justify-between">
                          <p className="text-start text-muted text-[14px] ">
                            {value.teacherName}
                          </p>
                          <span className="text-end text-text ">
                            {value.cost} {t("Toman")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="w-2/3 m-auto">
                <h1 className="text-text font-bold ">{t("ErrorCourses")}</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
