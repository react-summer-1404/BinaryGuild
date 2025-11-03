import { useEffect, useState } from "react";
import { TopCoursesData } from "../../../core/services/api/get-data/index";
import TopCourses from "../landings-sections/TopCourses";
import SeeMore from "../../../components/common/button/SeeMore";

const TopCoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCourses = async () => {
    setIsLoading(true);
    try {
      const response = await TopCoursesData();

      const courses = response;
      console.log(courses);
      setCourses(courses);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <div>{isLoading}</div>
      <div>{error}</div>
      
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
