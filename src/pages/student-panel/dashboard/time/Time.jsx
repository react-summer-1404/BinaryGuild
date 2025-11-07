import { Button } from "@heroui/button";
import React from "react";

const Time = ({ name, description, image }) => {
  return (
    <div className="w-5/12 flex flex-nowrap mr-3">
      <Button
        isIconOnly
        aria-label="dark/light mode"
        variant="faded"
        className="border-gray-0 rounded-full bg-gray-0 h-12 w-14"
        >
        <img src={image} className="m-auto" />
      </Button>
      <div className="flex flex-wrap w-full mr-1">
        <p className="text-muted font-persian w-11/12 text-start text-[14px]">{name}</p>
        <p className="text-text text-start w-11/12 font-DemiBold text-persian">{description}</p>
      </div>
    </div>
  );
};

export default Time;
