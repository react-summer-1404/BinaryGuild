import React from "react";

const TopCourses = ({ cost, teacherName, title, imageAddress }) => {
  return (
    <div className="flex overflow-x-scroll lg:overflow-hidden  w-1/4 gap-2 flex-wrap ">
      <img src={imageAddress} className="w-11/12 m-auto" />
      <div className="w-11/12 m-auto">
        <h2 className="text-[32px] text-start text-text">{title}</h2>
        <div className="w-full flex justify-between ">
          <p className="text-[14px] text-start w-1/2 text-muted">
            {teacherName}
          </p>
          <span className="text-[14px] text-end w-1/2 text-text">{cost}</span>
        </div>
      </div>
    </div>
  );
};

export default TopCourses;
