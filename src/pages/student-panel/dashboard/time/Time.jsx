import { Button } from "@heroui/button";
import React from "react";

const Time = ({ name, description, image }) => {
  return (
    <div className="flex flex-nowrap">
      <Button
        isIconOnly
        aria-label="dark/light mode"
        variant="faded"
        className="rounded-full bg-muted"
        >
        <img src={image} className="m-auto" />
      </Button>
      <div className="flex flex-wrap">
        <p className="text-muted font-persian text-start text-[14px]">{name}</p>
        <p className="text-text text-persian font-DemiBold">{description}</p>
      </div>
    </div>
  );
};

export default Time;
