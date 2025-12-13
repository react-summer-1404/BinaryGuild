import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import CourseHeader from "./CourseHeader";
import CourseDescription from "./CourseDescription";
import CourseComments from "./CourseComments";
import RelatedCourses from "./RelatedCourses";
import { GetCourse } from "../../core/services/api/get-data";
import CourseReserveMobileMode from "./CourseReserveMobileMode";
import { Spinner } from "@heroui/react";
import { useTranslation } from "react-i18next";
export const CourseDetailPage = () => {
  const { id: courseId } = useParams();
    const { t } = useTranslation();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const CourseData = async () => {
      setLoading(true);
      try {
        const response = await GetCourse(courseId);
        console.log(response, "response");
        setCourse(response);
      } catch (error) {
        console.log(error, "error");
      } finally {
        setLoading(false);
      }
    };
    if (courseId) CourseData();
  }, [courseId]);

  if (!course) return <p>در حال بارگزاری</p>;

  return (
    <>
      {!loading ? (
        <div className=" w-full m-auto bg-background flex flex-col items-center text-text rtl:text-right mt-14 max-[540px]:mt-40 ">
          <CourseHeader course={course} courseId={course.courseId} />
          <CourseDescription course={course} courseId={course.courseId} />
          <CourseComments courseId={course.courseId} course={course} />
          <RelatedCourses course={course} courseId={course.courseId} />
          <CourseReserveMobileMode courseId={course.courseId} course={course} />
        </div>
      ) : (
        <div className="w-2/3 m-auto">
          <Spinner size="lg" color="primary" className="mt-10" />
          <p className="text-text font-persian text-2xl">{t("PleaseWait")}</p>
        </div>
      )}
    </>
  );
};
