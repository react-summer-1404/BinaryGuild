import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import CourseHeader from "../../../pages/courseDetail/CourseHeader";
import CourseDescription from "../../../pages/courseDetail/CourseDescription";
import CourseComments from "../../../pages/courseDetail/CourseComments";
import RelatedCourses from "../../../pages/courseDetail/RelatedCourses";
import { GetCourse } from "../../../core/services/api/get-data";
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
    <div className="w-351 bg-background text-text rtl:text-right mt-14 ">
      <CourseHeader course={course} />
      <CourseDescription course={course} />
      <CourseComments courseId={course.courseId} />
      <RelatedCourses />
    </div>
  );
};
