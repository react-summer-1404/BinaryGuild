import React from "react";

const PeopleWrapper = () => {
  return (
    <div className="flex flex-wrap m-auto w-[275px] gap-4 h-[40%]">
      <div className="flex flex-nowrap items-center gap-2 cursor-pointer">
        <img src="/src/assets/icons/Group 1.svg" />
        <p className="text-sm font-persian">+100 دانشجوی فعال در دوره</p>
      </div>
      <div className="flex flex-nowrap items-center gap-2 cursor-pointer">
        <img src="/src/assets/icons/Group 2.svg" />
        <p className=" font-persian">+50 اساتید برتر جهان</p>
      </div>

    </div>
  );
};

export default PeopleWrapper;
