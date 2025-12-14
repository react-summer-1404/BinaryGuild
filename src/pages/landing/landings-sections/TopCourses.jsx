import React from "react";
import fallBack from "../../../assets/images/courses.jpg"
import ImageFallBack from "../../../components/common/image-fallback/ImageFallBack";
import { useTranslation } from "react-i18next";

const TopCourses = ({ cost, teacherName, title, imageAddress }) => {
  const { t } = useTranslation();
  return (
    <div className="flex overflow-x-scroll lg:overflow-hidden  w-1/4 gap-2 flex-wrap ">
      <div className="w-[96%] ">
      <ImageFallBack
        src={imageAddress}
        fallBack={fallBack}
        className="w-full m-auto rounded-4xl"
      /></div>
      <div className="w-11/12 m-auto">
        <h2 className="text-[32px] font-persian text-start text-text">{title}</h2>
        <div className="w-full flex justify-between ">
          <p className="text-[14px] font-persian text-start w-1/2 text-muted">
            {teacherName}
          </p>
          <span className="text-[14px] font-persian text-end w-1/2 text-text">{cost} {t("Toman")}</span>
        </div>
      </div>
    </div>
  );
};

export default TopCourses;
