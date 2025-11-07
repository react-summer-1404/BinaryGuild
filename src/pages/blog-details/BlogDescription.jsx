import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@heroui/button";
import ReactStars from "react-stars";
import toast, { Toaster } from "react-hot-toast";
import { AddBlogsRating } from "../../core/services/api/post-data";
const BlogDescription = ({ describe, NewsId }) => {
  const { t } = useTranslation();
  const [rating, setRating] = useState(0);
  const [copy, setCopy] = useState(false);


  const handleRating = async (newRate) => {
    console.log(typeof courseId);
    setRating(newRate);
    console.log(handleRating);
    console.log("data before send", Response);
    try {
      const Response = await AddBlogsRating({
        NewsId: NewsId,
        RateNumber: newRate,
      });
      toast.success("نظر شما با موفقیت ثبت شد");
      console.log(Response);
    } catch (error) {
      console.log(error, "no rate");
      toast.error("نظر شما قبلا ثبت شده است");
    }
  };

    const handleCopy = async () => {
    const Url = window.location.href;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(Url);
      }
      console.log(Url);
      setCopy(true);
      toast.success(t("copied"));
      setTimeout(() => {
        setCopy(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-full mt-10 flex flex-col gap-5  max-[540px]:mt-25">
      <Toaster />
      <h2 className="flex justify-start text-[#707070] font-[700] text-[20px] h-10 ">
        {" "}
        {t("CourseDesHead")}{" "}
      </h2>

      <p className="text-text2 font-medium text-[16px] flex justify-start">
        {describe}
      </p>

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

      {/* copy */}
      <Button className="border cursor-pointer border-buttonBorder bg-[#FCFCFC] rounded-[48px] w-[235px] h-14 text-[#3772FF] font-[500] text-[16px]  min-[768px]:hidden  ">
        <img
          className="max-[1160px]:w-3 max-[1160px]:h-3 max-[1000px]:w-4 max-[1000px]:h-4 "
          src="../../../src/assets/icons/Vector.png"
        />
        <div onClick={handleCopy} className="">
          {copy ? t("copied") : t("PageLink")}
        </div>
      </Button>
    </div>
  );
};

export default BlogDescription;
