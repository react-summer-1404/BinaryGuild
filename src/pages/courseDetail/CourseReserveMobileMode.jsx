import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@heroui/button";

const CourseReserveMobileMode = ({ course }) => {
  const { t } = useTranslation();

  return (
    <div className="mb-5 mt-5 items-center w-full flex justify-center gap-5 min-[540px]:hidden">
      <Button className="bg-[#3772FF] cursor-pointer w-[194px] h-14 rounded-[40px] flex justify-center items-center gap-2">
        <img src="../../../src/assets/icons/archive-02.png" />
        <p className="text-[#FCFCFC] text-[20px] font-[700] mb-2 max-[750px]:text-[16px]">
          {t("ReserveCourse")}
        </p>
      </Button>
      <div>
        {course.cost} {t("Price")}
      </div>{" "}
    </div>
  );
};

export default CourseReserveMobileMode;
