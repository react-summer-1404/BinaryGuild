import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetAllUserCourses, GetCourse } from "../../../../core/services/api/get-data";
import { useQuery } from "@tanstack/react-query";
import CourseData from "./CourseData";

const CourseDetail = () => {
  const { id: courseId } = useParams();
  const [course, setCourse] = useState(null);

  const { data: getCourseData } = useQuery({
    queryKey: ["GET-COURSE-DETAIL"],
    queryFn: GetAllUserCourses(courseId),
  });
  useEffect(() => {
    const CourseData = async () => {
      try {
        const response = await GetAllUserCourses();
        console.log(response, "response");
        setCourse(response);
      } catch (error) {
        console.log(error,"error");
      }
    };
    if(courseId) CourseData();
  }, [courseId]);

  if (!course) return <p>در حال بارگزاری</p>;

  return (
    <div className=" w-full m-auto bg-background flex flex-col items-center text-text rtl:text-right mt-14 max-[540px]:mt-40 ">
      {courseId ? (
        getCourseData?.map((value) => {
          return (
            <CourseData
              key={value.key}
              title={value.title}
              currentImageAddressTumb={value.currentImageAddressTumb}
              likeCount={value.likeCount}
              dissLikeCount={value.dissLikeCount}
              describe={value.describe}
              addUserFullName={value.addUserFullName}
              cost={value.cost}
              insertDate={value.insertDate}
            />
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CourseDetail;
