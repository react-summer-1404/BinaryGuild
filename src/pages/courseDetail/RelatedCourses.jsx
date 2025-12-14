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
    const visibleRelatedCourses = relatedCourses.slice(0, 3);

   

  return (
    <div className="  h-[400px] w-full  mb-10 " >
      <h2 className="text-gray-400 font-bold text-[20px] flex justify-start">
        {t("RealatedCourses")}
      </h2>

      <div className=" w-full h-[366px] grid grid-cols-4 gap-6 mt-6  max-[1200px]:grid-cols-3 max-[1000px]:flex max-[1000px]:overflow-x-scroll   max-[1000px]:scrollbar-hide ">
        {visibleRelatedCourses.length > 0 ? (
          visibleRelatedCourses.map((course) => (
            <div
              key={course.id}
              className="h-full   flex flex-col shrink-0  "
            >
              <div className="relative gap-2 flex ">
                <img
                  className="h-[293px] rounded-t-3xl "
                  src={course.imageAddress}
                  alt=""
                />
                <div className="absolute top-2 right-2 w-[65px] text-[#FCFCFC] font-medium text-[14px] flex items-center justify-center h-6 rounded-4xl bg-[#FF37F5] ">
                  {course.courseLevelName}
                </div>
                {/* <div className=" w-[89px] h-6 rounded-4xl bg-blue ">{} </div> */}
              </div>

              <div className="border-black-900 rounded-b-3xl border-b-1 border-l-1 border-r-1  pb-2  pr-2 pl-2 ">
                <h2 className="text-text  font-bold text-[24px] ">
                  {course.techName}{" "}
                </h2>
                <div className="flex justify-between">
                  <p className="text-gray-400 text-[14px] font-medium ">
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
          ))
        ) : (
          <p className=" w-full h-1/2 flex justify-center items-center ">
            {" "}
            {t("NoRelatedCourse")}
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedCourses;
