import React from "react";
import People from "./people/People";
import Text from "./text/Text";
import LandingButton from "./landing-button/LandingButton";
import Goals from "../goals/goals-list/GoalsList";
import GoalsList from "../goals/goals-list/GoalsList";
import ServicesList from "../services/services-list/ServicesList";

const Introduction = () => {
  return (
    <div className="flex flex-wrap gap-10">
      <div className="flex flex-wrap justify-between w-[100%]">
        <People />
        <Text />
        <LandingButton />
      </div>
      <h2 className="text-[32px] m-auto font-persian">اهداف ما در آکادمی</h2>
      <GoalsList />
      <h2 className="text-[32px] m-auto font-persian w-[21%]">
        خدماتی که ما در طی دوره‌ها به شما ارائه میدیم
      </h2>
      <ServicesList />
      <h2 className="text-[32px] m-auto font-persian w-[21%]">
        دوره های برتر هفته
      </h2>
      
    </div>
  );
};

export default Introduction;
