import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  GetAllUserCourses,
  GetCourse,
} from "../../../../core/services/api/get-data";
import { useQuery } from "@tanstack/react-query";
import CourseData from "./CourseData";
import { useTranslation } from "react-i18next";

const CourseDetail = () => {
  const { id: courseId } = useParams();
  // const { t } = useTranslation();
  console.log("courseId :" ,courseId)
  const [course, setCourse] = useState(null);
  // const [loading, setLoading] = useState();

  useEffect(() => {
    const CourseData = async () => {
      // setLoading(true);
      try {
        const response = await GetCourse(courseId);
        console.log(response, "response");
        setCourse(response);
      } catch (error) {
        console.log(error, "error");
      }// finally {
      //   setLoading(false);
      // }
    };
    if (courseId) CourseData();
  }, [courseId]);

  if (!course) return <p>در حال بارگزاری</p>;

  return (
    <div className=" w-full m-auto bg-background flex flex-col items-center text-text rtl:text-right mt-14 max-[540px]:mt-40 ">
      <CourseData
        key={course.key}
        title={course.title}
        currentImageAddressTumb={course.currentImageAddressTumb}
        likeCount={course.likeCount}
        dissLikeCount={course.dissLikeCount}
        describe={course.describe}
        addUserFullName={course.addUserFullName}
        cost={course.cost}
        insertDate={course.insertDate}
      />
    </div>
  );
};

export default CourseDetail;
