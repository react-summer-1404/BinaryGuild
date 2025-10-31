import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactStars from "react-stars";
import { CourseRating } from "../../core/services/api/post-data";
import { Button } from "@heroui/button";


const CourseDescription = ({ course, CourseId }) => {
  const { t } = useTranslation();

  const[rating, setRating]=useState(0);

  const handleRating= async(newRate)=>{
    setRating(newRate);
  

try{
  const Response = await CourseRating(CourseId, newRate);
  console.log(Response)
}catch(error){
  console.log(error)
}
}
  return (
    <div className=" w-full mt-14 flex flex-col gap-5  max-[540px]:mt-12">
      <h2 className="text-[#707070] font-[700] text-[20px] h-10 ">
        {" "}
        {t("CourseDesHead")}{" "}
      </h2>

      <p className=" ">{course.miniDescribe}</p>

      <div className="flex items-center gap-2 max-[540px]:block">
        <div className="flex items-center gap-3">
          <p className="text-[#3772FF] font-[600] text-[16px]">
            {t("CourseRate")}
          </p>

            <div className="flex items-center gap-2 ">
              <ReactStars className="cursor-grab"
                count={5}
                value={rating}
                onChange={handleRating}
                size={28}
                color1="#D9D9D9"
                color2="#FCFF46"
                edit={false}
              />
            </div>
        </div>

        <div className="flex max-[540px]:mt-4">
          <Button className="border-[1px] cursor-pointer gap-2 border-[#3772FF] bg-[#FCFCFC] pt-2 pb-2 pr-6 pl-6 flex justify-center items-center rounded-[48px] w-[216px] h-[39px] text-[#3772FF] font-[500] text-[16px]">
            <img src="../../../src/assets/icons/Vector.png" />
            {t("PageLink")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
