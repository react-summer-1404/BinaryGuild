import { Button } from "@heroui/button";
// import React, { useState } from "react";

const ServicesSectionWrapper = ({ name, description, image }) => {
  // const [boarderColor, setBoarderColor] = useState();

  // const changeColor = () =>{
  //   onclick(setBoarderColor === boarderColor ? 'border-blue ':'border-gray-100')

  // }

  return (
    <div className="w-2/5 h-[144px] flex flex-wrap justify-around border-boarder bg-backgroundColor rounded-4xl border-[0.5px] gap-0.5">
      <Button
        isIconOnly
        color="warning"
        variant="faded"
        className="border-2 m-8 w-[13%] h-[74px] border-boarder bg-background rounded-full"
      >
        <img src={image} className="m-auto" />
      </Button>
      <div className="w-[74%] items-start mt-auto mb-auto">
        <h2 className="font-persian w-[100%] text-[20px] text-justify font-bold">
          {name}
        </h2>
        <p className="font-persian w-[100%] text-muted text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServicesSectionWrapper;
