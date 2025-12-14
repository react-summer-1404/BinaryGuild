import React from "react";
import fallBack from "../../../assets/images/no-blogs.avif";
import ImageFallBack from "../../../components/common/image-fallback/ImageFallBack";

const TopBlogs = ({ item }) => {
  const { addUserFullName, currentImageAddress, title } = item;
  return (
    <div className="overflow-x-scroll lg:overflow-hidden flex flex-wrap gap-2 w-1/3">
      <ImageFallBack
        src={currentImageAddress}
        fallBack={fallBack}
        className="w-11/12 m-auto rounded-4xl"
      />
      <div className="w-11/12 m-auto">
        <h2 className="text-2xl font-persian text-start text-text">{title}</h2>

        <div className="w-full flex flex-nowrap justify-between">
          <p className="text-start font-persian text-muted text-[14px]">{addUserFullName}</p>
        </div>
      </div>
    </div>
  );
};

export default TopBlogs;
