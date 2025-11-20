import React from "react";

const BlogDetails = ({ onCloseNesDetail }) => {
  return (
    <div className="border border-white w-100 top-62 l h-full absolute z-200 bg-amber-50 text-black">
      BlogDetails
      <div
        onClick={onCloseNesDetail}
        className=" p-1 rounded-small bg-[#5f0505] cursor-pointer w-6 h-6 "
      >
        <img src="../../../../src/assets/icons/close.png" alt="" />
      </div>
    </div>
  );
};

export default BlogDetails;
