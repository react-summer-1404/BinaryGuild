import React from "react";
import { useTranslation } from "react-i18next";
import Profile1 from "../../../../core/icons/Profile1";

const YourComments = () => {
  const { t } = useTranslation();
  return (
    <div className="w-1/3 flex flex-wrap m-2">
      <div className="w-full flex flex-wrap justify-between">
        <p className="font-bold 1/3">{t("YourComment")}</p>
        <p className="text-blue font-persian text-end w-1/3">{t("SeeOther")}</p>
      </div>
      <div className="border-b-1 border-boarder h- w-full">
        <p className="text-muted text-center">{t("CourseAndBlog")}</p>
      </div>
      <div className="w-full">
        <div className="w-1/2 flex flex-nowrap gap-2">
          <img className=" w-2/5" onError={Profile1} />
          <div className=" w-1/2 flex flex-wrap gap-1 ">
            <p className="text-start w-full font-bold text-[14px] text-text "></p>
            <p className="text-start w-full text-[12px] text-text "></p>
          </div>
        </div>
        <p className="text-start w-full font-bold text-text "></p>
        <p className="text-start w-full text-[14px] text-text "></p>
        <div className="justify-start w-1/2 font-bold flex flex-nowrap gap-4">
          <div className="w-1/2">
            <img className=""/>
            <p></p>
          </div >
          <div className="w-2/5">
            <img />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComments;
