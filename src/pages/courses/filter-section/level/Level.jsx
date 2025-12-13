import React from "react";
import { useTranslation } from "react-i18next";
import LevelImage from "../../../../core/icons/LevelImage";
import { Select, SelectItem } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { GetCoursesLevel } from "../../../../core/services/api/get-data";

const Level = ({ setFilter }) => {
  const { data: courseLevel } = useQuery({
    queryKey: ["GET_COURSE_LEVEL"],
    queryFn: GetCoursesLevel,
  });
  const { t } = useTranslation();
  return (
    <div className="w-11/12 flex flex-wrap m-auto gap-4">
      <div className="flex flex-nowrap w-full gap-2">
        <LevelImage />
        <p className="text-text">{t("Level")}</p>
      </div>
      <div className="flex w-screen items-center">
        <Select
          className="w-full text-[12px]"
          isClearable={true}
          classNames={{
            listboxWrapper: "bg-background text-text",
            label: "text-[12px] font-persian",
          }}
          onSelectionChange={(value) => {
            setFilter((prev) => ({
              ...prev,
              courseLevelId: value?.currentKey?.substring(2),
              CourseTypeId: value?.currentKey ? 1 : undefined,
            }));
            console.log(value?.currentKey?.substring(2), "data");
          }}
          label={t("SelectLevel")}
        >
          {courseLevel?.map((value) => (
            <SelectItem classNames={{ title: "font-persian" }} key={value.key}>
              {value.levelName}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default Level;
