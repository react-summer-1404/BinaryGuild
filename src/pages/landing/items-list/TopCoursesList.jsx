import { useEffect, useState } from "react";
import { TopCoursesData } from "../../../core/services/api/get-data/index";
import TopCourses from "../landings-sections/TopCourses";
import SeeMore from "../../../components/common/button/SeeMore";

const TopCoursesList = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await TopCoursesData();

      const courses = response;
      console.log(courses);
      setCourses(courses);;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className=" w-full flex flex-wrap gap-4">
      <div className="w-full flex flex-nowrap">
        {courses.map((item) => {
          return <TopCourses key={item.id} {...item} />;
        })}
      </div>
      <SeeMore/>
    </div>
  );
};

export default TopCoursesList;
