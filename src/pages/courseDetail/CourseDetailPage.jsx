import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import CourseHeader from "./CourseHeader";
import CourseDescription from "./CourseDescription";
import CourseComments from "./CourseComments";
import RelatedCourses from "./RelatedCourses";
import { GetCourse } from "../../core/services/api/get-data";
import CourseReserveMobileMode from "./CourseReserveMobileMode";
import { GetCourseGroup } from "../../core/services/api/get-data";
import { useQuery } from "@tanstack/react-query";
// import { useQuery } from "@tanstack/react-query";
export const CourseDetailPage = () => {
  const { id: courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const CourseData = async () => {
      try {
        const response = await GetCourse(courseId);
        console.log(response, "response is");
        setCourse(response);
      } catch (error) {
        console.log(error, "error");
      }
    };
    if (courseId) CourseData();
  }, [courseId]);
  const TeacherId = course?.teacherId;
  const CourseId = course?.courseId;

  const { data: courseGroup } = useQuery({
    queryKey: ["users-detail", TeacherId, CourseId],
    queryFn: () => GetCourseGroup(TeacherId, CourseId),
    enabled:!!TeacherId && !!CourseId
  });
  console.log(courseGroup, "grouppppppp");

  if (!course) return <p>در حال بارگزاری</p>;

  return (
    <div className=" w-[92%] m-auto bg-background flex flex-col items-center text-text rtl:text-right mt-14 max-[540px]:mt-40 ">
      <CourseHeader course={course} courseGroup={courseGroup} courseId={course.courseId} />
      <CourseDescription course={course} courseId={course.courseId} />
      <CourseComments courseId={course.courseId} course={course} />
      <RelatedCourses course={course} courseId={course.courseId} />
      <CourseReserveMobileMode courseId={course.courseId} course={course} />
    </div>
  );
};
