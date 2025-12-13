import { useQuery } from "@tanstack/react-query";
import Date from "../../../components/common/search-and-date/date/Date";
import Search from "../../../components/common/search-and-date/search/Search";
import { GetCategory } from "../../../core/services/api/get-data";
import CourseCategorySection from "./category/CourseCategorySection";
import Cost from "./cost/Cost";
import Level from "./level/Level";
import Teacher from "./teachers/Teacher";

const CourseCategory = ({ setFilter }) => {
  const { data: categoryData } = useQuery({
    queryKey: ["GET_CATEGORY"],
    queryFn: GetCategory,
  });
  console.log("categoryData", categoryData);
  return (
    <>
      <div className="lg:flex flex-wrap hidden mt-4 mb-2 w-10/12 m-auto gap-3">
        <Search setFilter={setFilter} />
        <CourseCategorySection setFilter={setFilter} ListTech={categoryData} />
        <Level setFilter={setFilter} courseLevelId={categoryData} />
        <Teacher setFilter={setFilter} />
        <Cost setFilter={setFilter} />
        <Date setFilter={setFilter} />
      </div>
    </>
  );
};

export default CourseCategory;
