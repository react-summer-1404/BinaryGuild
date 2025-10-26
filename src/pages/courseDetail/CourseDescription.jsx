import React from "react";
import { useTranslation } from "react-i18next";

const CourseDescription = ({course}) => {
  const { t } = useTranslation();
  return (
    <div className=" mt-5 flex flex-col justify-between gap-5">
      <h2 className="text-[#707070] font-[700] text-[20px] h-10 ">
        {" "}
        {t("CourseDesHead")}{" "}
      </h2>

      <p className=" ">{course.miniDescribe}</p>

      <div className="flex items-center ">
        <div className="flex gap-3">
          <p className="text-[#3772FF] font-[600] text-[16px]">
            {t("CourseRate")}
          </p>

          <div className=" w-30">stars place</div>
        </div>

        <div className="flex">
          <button className="border-[1px] cursor-pointer gap-2 border-[#3772FF] flex justify-center items-center rounded-[48px] w-[216px] h-[39px] text-[#3772FF] font-[500] text-[16px]">
            <img src="../../../src/assets/icons/Vector.png" />
            {t("PageLink")}
          </button>
        </div>

      </div>
    </div>
  );
};

export default CourseDescription;