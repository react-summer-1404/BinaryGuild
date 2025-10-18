import React from "react";

const GoalsWrapper = ({ id, name, description, image }) => {
  console.log("id", id);
  return (
    <div className="flex flex-wrap border-1 h-[400px] w-[21%] pr-5 pt-2 mr-[3%] bg-black border-gray-100 rounded-3xl text-right z-40">
      <h2 className="text-[20px] cursor-pointer font-persian">{name}</h2>
      <p className="text-gray-400 cursor-pointer font-persian">{description}</p>
      <img src={image} className="size-[70%] items-center" />
    </div>
  );
};

export default GoalsWrapper;
