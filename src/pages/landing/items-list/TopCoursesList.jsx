import { useEffect, useState } from "react";
import { TopCoursesData } from "../../../core/services/api/get-data/index";
import TopCourses from "../landings-sections/TopCourses";
import SeeMore from "../../../components/common/button/SeeMore";

const TopCoursesList = () => {
  const [courses, setCourses] = useState([]);

const fetchCourses = async () => {
  try {
    const res = await TopCoursesData();
    const list = res?.data || res;
    setCourses(Array.isArray(list) ? list : []);
  } catch {
    setCourses([]);
  }
};

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className=" w-full flex flex-wrap gap-4">
      <div className="w-full flex flex-nowrap overflow-x-scroll lg:overflow-hidden  ">
        {courses?.map((item) => {
          return <TopCourses key={item.courseId} {...item} />;
        })}
      </div>
      <SeeMore/>
    </div>
  );
};

export default TopCoursesList;
