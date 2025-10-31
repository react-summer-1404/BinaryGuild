import React, { useEffect, useState } from "react";
import TopCourses from "../landings-sections/TopCourses";
import instance from "../../../core/services/interceptor";

const TopCoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCourses = async () => {
    setIsLoading(true);
    try {
      const response = await instance.get("/Home/GetCoursesTop?Count=4");

      const courses = await response.onSuccess;

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
      {courses.map((value) => {
        <TopCourses key={value.id} {...value} />;
      })}
    </div>
  );
};

export default TopCoursesList;
