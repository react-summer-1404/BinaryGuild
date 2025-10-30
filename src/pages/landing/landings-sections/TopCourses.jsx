import React from "react";

const TopCourses = ({ imageAddress, teacherName, cost, title }) => {
  return (
    <div className="flex w-1/5 gap-2 flex-wrap ">
      <img src={imageAddress} className="w-11/12 m-auto" />
      <div>
        <h2 className="text-[32px] text-start text-text">{title}</h2>
        <p className="text-[14px] text-start w-1/2 text-muted">{teacherName}</p>
        <span className="text-[14px] text-start w-1/2 text-text">
          {cost}
        </span>{" "}
      </div>
    </div>
  );
};

export default TopCourses;
