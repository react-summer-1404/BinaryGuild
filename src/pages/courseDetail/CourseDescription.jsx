import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CourseRating } from "../../core/services/api/post-data";
import { Button } from "@heroui/button";
import ReactStars from "react-stars";
import toast, { Toaster } from "react-hot-toast";



const CourseDescription = ({ course, courseId }) => {
  const { t } = useTranslation();
  const [rating, setRating] = useState(0);
  const [copy, setCopy] = useState(false);


  const handleCopy=async()=>{
    const Url = window.location.href;
    try {
      if(navigator.clipboard && window.isSecureContext){
        await navigator.clipboard.writeText(Url);
      }
      console.log(Url)
      setCopy(true)
      toast.success(t("copied"))
      setTimeout(() => {
        setCopy(false)
      }, 2000);
    } catch (error) {
      console.log(error)
    }
  }

  const handleRating = async (newRate) => {

    setRating(newRate);

    console.log("data before send",Response);
    try {
      const Response = await CourseRating({
        courseId: courseId,
        RateNumber: newRate,
      });
      toast.success(t("successCourseRating"))
      console.log(Response);
    } catch (error) {
      console.log(error,"no rate");
      toast.error(t("errorCourseRating"))
      
    }
  };
  return (
    <div className=" w-full mt-18 flex flex-col gap-5  max-[540px]:mt-12">
      <Toaster/>
      <h2 className="flex justify-start text-[#707070] font-[700] text-[20px] h-10 ">
        {" "}
        {t("CourseDesHead")}{" "}
      </h2>

      <p className=" flex justify-start">{course.miniDescribe}</p>

      <div className="flex items-center gap-2 max-[540px]:block">
        <div className="flex items-center gap-3">
          <p className="text-[#3772FF] font-[600] text-[16px]">
            {t("CourseRate")}
          </p>

          <ReactStars
            className="cursor-pointer"
            count={5}
            value={rating}
            onChange={handleRating}
            size={24}
            color1="#D9D9D9"
            color2="#FCFF46"
            edit={true}
          />
        </div>

        <div  className="flex max-[540px]:mt-4">
          <Button className="border-[1px] cursor-pointer  border-buttonBorder bg-[#FCFCFC] p-1  rounded-[48px] w-[216px] h-[39px] text-[#3772FF] font-[500] text-[16px]">
            <div onClick={handleCopy}  className=" w-full flex justify-center gap-3 items-center ">
            <img src="../../../src/assets/icons/Vector.png" />
            {copy ? t("copied") : t("PageLink")}               
            </div>

          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
