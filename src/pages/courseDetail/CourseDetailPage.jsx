import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import CourseHeader from "./CourseHeader"
import CourseDescription from "./CourseDescription"
import CourseComments from "./CourseComments";
import RelatedCourses from "./RelatedCourses"
import { GetCourse } from "../../core/services/api/get-data";
import CourseReserveMobileMode from "./CourseReserveMobileMode";
export const CourseDetailPage = () => {
  const { id : courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const CourseData = async () => {
      try {
        const response = await GetCourse(courseId);
        console.log(response, "response");
        setCourse(response);
      } catch (error) {
        console.log(error,"error");
      }
    };
    if(courseId) CourseData();
  }, [courseId]);

  if(!course) return <p>در حال بارگزاری</p>;
  

  return (
    <div className=" w-full m-auto bg-background flex flex-col items-center text-text rtl:text-right mt-14 max-[540px]:mt-40 ">
      <CourseHeader course={course} />
      <CourseDescription course={course} />
      <CourseComments courseId={course.courseId} />
      <RelatedCourses />
      <CourseReserveMobileMode course={course}/>
    </div>
  );
};