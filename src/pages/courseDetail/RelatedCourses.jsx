import { Button } from "@heroui/button";
import { useTranslation } from "react-i18next";
import { GetCourse } from "../../core/services/api/get-data";
import { useState } from "react";
import { useEffect } from "react";
import { GetCourseTech } from "../../core/services/api/get-data";

const RelatedCourses = ({ courseId }) => {
  const { t } = useTranslation();
  const [relatedCourses, setRelatedCourses] = useState([]);

  useEffect(() => {
    const relatedCourse = async () => {
      try {
        const courseResponse = await GetCourse(courseId);
        console.log(courseResponse, "course Response");

        const techResponse = await GetCourseTech();
        console.log(techResponse, "tech response");

        const techName = courseResponse.courseTech.map((t) => t.tech.techName);

        console.log("tech name:", techName);
        const relatedTech = techResponse.filter((t) =>
          techName.includes(t.techName)
        );
        console.log("related tech:", relatedTech);

        const relatedData = relatedTech.map((t) => ({
          id: t.id,
          techName: t.techName,
          describe: t.describe,
          courseLevelName: courseResponse.courseLevelName,
          cost: courseResponse.cost,
          imageAddress: courseResponse.imageAddress,
          teacherName: courseResponse.teacherName,
        }));

        setRelatedCourses(relatedData);
      } catch (error) {
        console.log(error);
      }
    };
    if (courseId) relatedCourse();
  }, [courseId]);

  return (
    <div className=" h-[400px] w-full mt-10 mb-14  max-[768px]:mt-80">
      <h2 className="text-[#707070] font-[700] text-[20px] flex justify-start">
        {t("RealatedCourses")}
      </h2>

      <div className=" w-full h-[366px] grid grid-cols-4 gap-4 mt-6 max-[768px]:flex max-[768px]:overflow-x-scroll max-[768px]:scrollbar-hide ">
        {relatedCourses.map((course) => (
          <div
            key={course.id}
            className="h-full flex flex-col justify-between max-[768px]:min-w-[320px] "
          >
            <div className="relative gap-2 flex ">
              <img
                className="h-[293px] rounded-[24px] "
                src={course.imageAddress}
                alt=""
              />
              <div className="absolute top-2 right-2 w-[65px] text-[#FCFCFC] font-medium text-[14px] flex items-center justify-center h-6 rounded-[32px] bg-[#FF37F5] ">
                {course.courseLevelName}
              </div>
              {/* <div className=" w-[89px] h-6 rounded-[32px] bg-blue ">{} </div> */}
            </div>

            <div className=" h-[61px] ">
              <h2 className="text-text  font-bold text-[24px] ">
                {course.techName}{" "}
              </h2>
              <div className="flex justify-between">
                <p className="text-[#707070] text-[14px] font-medium ">
                  {course.teacherName}
                </p>
                <div className="flex">
                  <p className="text-text font-bold text-[16px] ">
                    {course.cost}
                  </p>{" "}
                  <p className="text-[14px] text-text font-medium">
                    {t("Price")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedCourses;
