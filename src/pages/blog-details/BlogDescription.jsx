import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CourseRating } from "../../core/services/api/post-data";
import { Button } from "@heroui/button";
import ReactStars from "react-stars";
import toast, { Toaster } from "react-hot-toast";
import { AddBlogsRating } from "../../core/services/api/post-data";
const BlogDescription = ({ describe ,NewsId}) => {
  const { t } = useTranslation();
  const [rating, setRating] = useState(0);

  const handleRating = async (newRate) => {
    console.log(typeof courseId);
    setRating(newRate);
    console.log(handleRating);
    console.log("data before send", Response);
    try {
      const Response = await AddBlogsRating({
        NewsId:NewsId ,
        RateNumber: newRate,
      });
      toast.success("نظر شما با موفقیت ثبت شد");
      console.log(Response);
    } catch (error) {
      console.log(error, "no rate");
      toast.error("نظر شما قبلا ثبت شده است");
    }
  };

  return (
    <div className=" w-full mt-25 flex flex-col gap-5  max-[540px]:mt-12">
      <Toaster />
      <h2 className="flex justify-start text-[#707070] font-[700] text-[20px] h-10 ">
        {" "}
        {t("CourseDesHead")}{" "}
      </h2>

      <p className="text-text2 font-medium text-[16px] flex justify-start">{describe}</p>

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
      </div>
    </div>
  );
};

export default BlogDescription;
