import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@heroui/button";
import { useState, useEffect } from "react";
import { GetCourseComments } from "../../core/services/api/get-data";
const CourseComments = ({ courseId }) => {
  const [comment, setComment] = useState([]);
  const { t } = useTranslation();


  useEffect(() => {

    const comments = async () => {
      try {
        const response = await GetCourseComments(courseId);
        console.log(response, "comments response");
        setComment(response);
      } catch (error) {
        console.log(error);
      }
    };
    if (courseId) comments();
  }, [courseId]);

  return (
    <div className=" h-[400px] mt-8">
      <h2 className="text-[#707070] font-[700] text-[20px] ">
        {t("CommentsHead")}
      </h2>

      <div className=" w-full h-[282px] grid grid-cols-4 gap-4 mt-6">
        <div className=" h-full rounded-[24px] bg-[#3772FF] flex justify-center items-center ">
          <div className="flex flex-col items-center justify-center">
            <img
              src="../../../src/assets/icons/comment-add-01.png"
              className="w-8 h-8"
            />
            <p className="text-[#FCFCFC] text-[18px] font-[600] mt-2 ">
              {t("Comments")}
            </p>
            <button className="text-[#FCFCFC] cursor-pointer text-[14px] font-[500] mt-4">
              {t("CommentDescription")}
            </button>
          </div>
        </div>

        {comment.length > 0 ? (
          comment.map((course) => (
            <div
              key={course.id}
              className="border border-black bg-amber-600 h-full rounded-[24px] p-4 flex flex-col items-center justify-between"
            >
              <div className="border border-black h-[157px] w-full">
                <p className="text-text font-bold text-[18px]">{course.title}</p>
                <p className="text-text font-[500] text-[16px]">{course.describe}</p>
              </div>
              <div className="border border-black h-10 w-full"></div>
            </div>
          ))
        ) : (
          <div>not anythimg</div>
        )}
      </div>

      <div className="w-full h-[39px] flex justify-center items-center mt-5 ">
        <Button className="bg-[#2F2F2F] mt-8 cursor-pointer w-[125px] h-[39px] p-2 rounded-[40px] flex justify-center items-center gap-2 ">
          <p className="text-[#FCFCFC] text-[16px] font-[500]">
            {t("SeeMore")}
          </p>
        </Button>
      </div>
    </div>
  );
};

export default CourseComments;


