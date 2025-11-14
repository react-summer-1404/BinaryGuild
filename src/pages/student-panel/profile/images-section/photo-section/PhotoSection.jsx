import React from "react";
import ThreePoints from "../../../../../core/icons/ThreePoints";

const PhotoSection = () => {
  return (
    <div className="flex flex-wrap gap-4 mr-11 mt-4">
      <img src="/src/assets/icons/Peppe – 07 (1).svg" className="size-46" />
      <div className="relative">
        <img src="/src/assets/icons/Hand.svg" className="size-46" />
        <div className="absolute top-2 right-2.5">
          <ThreePoints />
        </div>
      </div>
      <img src="/src/assets/icons/Lady.svg" className="size-46" />
      <img src="/src/assets/icons/Froge – 3.svg" className="size-46" />
      <img src="/src/assets/icons/Smeed – 02.svg" className="size-46" />
    </div>
  );
};

export default PhotoSection;
