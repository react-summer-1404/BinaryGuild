import { Button } from "@heroui/button";
import React from "react";
import { Link } from "react-router-dom";

const LandingButton = () => {
  return (
    <div className="w-[150px] h-[20%] m-auto text-right flex flex-wrap gap-3">
      <div>
        <p className=" font-persian">همین حالا</p>
        <p className=" font-persian">شروع کن به یادگیری!</p>
      </div>
      <Link to={"/courses"}>
        <Button radius="full" className="bg-black-900 text-white font-persian">
          جدیدترین دوره‌ها
        </Button>
      </Link>
    </div>
  );
};

export default LandingButton;
