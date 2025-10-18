import GoalsListWrapper from "./goals/goals-list/GoalsList";
import LandingButtonWrapper from "./introduction/landing-button/LandingButton";
import PeopleWrapper from "./introduction/people/People";
import TextWrapper from "./introduction/text/Text";
import ServicesListWrapper from "./services-section/services-section-list/ServicesList";



const LandingWrapper = () => {
  return (
    <div className="flex flex-wrap gap-10">
      <div className="flex flex-wrap justify-between w-[100%]">
        <PeopleWrapper />
        <TextWrapper />
        <LandingButtonWrapper />
      </div>
      <h2 className="text-[32px] m-auto font-persian">اهداف ما در آکادمی</h2>
      <GoalsListWrapper />
      <h2 className="text-[32px] m-auto font-persian w-[21%]">
        خدماتی که ما در طی دوره‌ها به شما ارائه میدیم
      </h2>
      <ServicesListWrapper />
      <h2 className="text-[32px] m-auto font-persian w-[21%]">
        دوره های برتر هفته
      </h2>
      
    </div>
  );
};

export default LandingWrapper;
