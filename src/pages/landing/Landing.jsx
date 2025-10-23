import BlogsListWrapper from "./blogs/blogs-list/BlogsList";
import GoalsListWrapper from "./goals/goals-list/GoalsList";
import LandingButtonWrapper from "./introduction/landing-button/LandingButton";
import PeopleWrapper from "./introduction/people/People";
import TextWrapper from "./introduction/text/Text";
import ProfessorsWrapper from "./professors/Professors";
import ServicesListWrapper from "./services-section/services-section-list/ServicesList";

const LandingWrapper = () => {
  return (
    <div className="flex flex-wrap gap-10 bg-background text-text">
      <div className="flex flex-wrap justify-between w-[100%]">
        <PeopleWrapper />
        <TextWrapper />
        <LandingButtonWrapper />
      </div>
      
      <GoalsListWrapper />
      <h2 className="text-[32px] m-auto font-persian w-[21%] font-bold">
        خدماتی که ما در طی دوره‌ها به شما ارائه میدیم
      </h2>
      <ServicesListWrapper />
      <h2 className="text-[32px] m-auto font-persian w-[21%] font-bold">
        دوره های برتر هفته
      </h2>
      <h2 className="text-[32px] m-auto font-persian w-[21%] font-bold">
        بلاگ های برتر هفته
      </h2>
      <BlogsListWrapper />
      <ProfessorsWrapper />
    </div>
  );
};

export default LandingWrapper;
