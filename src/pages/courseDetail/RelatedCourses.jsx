import React from "react";
import { Button } from "@heroui/button";
import { useTranslation } from "react-i18next";

const RelatedCourses = () => {
  const { t } = useTranslation();

  return (
    <div className=" h-[400px] mt-8 mb-8">
      <h2 className="text-[#707070] font-[700] text-[20px] ">
        {t("RealatedCourses")}
      </h2>

      <div className=" w-full h-[366px] grid grid-cols-4 gap-4 mt-6">
        <div className="h-full flex flex-col justify-between ">
          <div className="border border-boarder h-[293px] rounded-[24px] ">
            {" "}
          </div>
          <div className="border border-black h-[61px] "></div>
        </div>
        <div className="h-full flex flex-col justify-between ">
          <div className="border border-boarder h-[293px] rounded-[24px] ">
            {" "}
          </div>
          <div className="border border-black h-[61px] "></div>
        </div>

        <div className="h-full flex flex-col justify-between ">
          <div className="border border-boarder h-[293px] rounded-[24px] ">
            {" "}
          </div>
          <div className="border border-black h-[61px] "></div>
        </div>

        <div className="h-full flex flex-col justify-between ">
          <div className="border border-boarder h-[293px] rounded-[24px] ">
            {" "}
          </div>
          <div className="border border-black h-[61px] "></div>
        </div>


      </div>
    </div>
  );
};

export default RelatedCourses;
