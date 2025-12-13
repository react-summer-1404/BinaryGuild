import { Button } from "@heroui/button";
import moment from "moment-jalaali";
import React from "react";
import Like from "../../../../core/icons/Like";
import DisLike from "../../../../core/icons/DisLike";
import Teachers from "../../../../core/icons/Teachers";
import View2 from "../../../../core/icons/View2";
import Calender from "../../../../core/icons/Calender";

const CourseData = ({
  title,
  currentImageAddressTumb,
  likeCount,
  dissLikeCount,
  describe,
  addUserFullName,
  cost,
  insertDate,
}) => {
  const formatDate = moment(insertDate).format("jYYYY/jMM/jDD");

  return (
    <div>
      <div className="w-11/12 m-auto">
        <h1 className="font-persian text-text text-start">{title}</h1>
      </div>
      <div className="w-11/12 m-auto">
        <img
          src={currentImageAddressTumb}
          className="w-full rounded-3xl"
        />
      </div>
      <div className="w-11/12 flex flex-wrap m-auto">
        <div className="w-full flex justify-between ">
          <Button className="w-1/3"></Button>
          <div className="w-1/3 flex flex-nowrap">
            <p className="font-persian"></p>
            <Like />
            <p className="font-persian">{likeCount}</p>
            <DisLike />
            <p className="font-persian">{dissLikeCount}</p>
          </div>
        </div>
        <div className="w-full flex justify-between ">
          <p className="text-textBlue2 font-bold w-full text-start"></p>
          <p className="w-full text-text font-persian">{describe}</p>
        </div>
        <div className="w-full flex justify-around ">
          <div>
            <p className="font-bold w-full text-textBlue2 text-start"></p>
            <Teachers />
            <p className="font-persian text-text">{addUserFullName}</p>
          </div>
          <div>
            <p className="font-bold w-full text-textBlue2 text-start"></p>
            <View2 />
            <p className="font-persian text-text">{cost}</p>
          </div>
          <div>
            <p className="font-bold w-full text-textBlue2 text-start"></p>
            <Calender />
            <p className="font-persian text-text">{formatDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseData;
