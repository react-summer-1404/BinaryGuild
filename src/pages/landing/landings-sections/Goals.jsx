import React from "react";
import { useTranslation } from "react-i18next";

const GoalsWrapper = ({ id, name, description, image }) => {
  const {t} = useTranslation()
  console.log("id", id);
  return (
    <div className="flex flex-col border-1 h-[400px] w-[300px]  p-3.5 bg-backgroundColor border-boarder rounded-2xl text-start z-40">
      <h2 className="text-[20px] text-text cursor-pointer font-persian font-bold">
        {t(name)}
      </h2>
      <p className="text-muted cursor-pointer font-persian p-1">
        {description}
      </p>
      <img src={image} className="size-[70%] items-center" />
    </div>
  );
};

export default GoalsWrapper;
