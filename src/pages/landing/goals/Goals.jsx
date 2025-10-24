import React from "react";

const GoalsWrapper = ({ id, name, description, image }) => {
  console.log("id", id);
  return (
    <div className="flex flex-wrap border-1 h-[400px] w-[21%] pr-5 pt-2 mr-[3%] bg-backgroundColor border-boarder rounded-3xl text-right z-40">
      <h2 className="text-[20px] text-text cursor-pointer font-persian font-bold">
        {name}
      </h2>
      <p className="text-muted cursor-pointer font-persian p-1">
        {description}
      </p>
      <img src={image} className="size-[70%] items-center" />
    </div>
  );
};

export default GoalsWrapper;
