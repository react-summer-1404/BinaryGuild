import BlogsListWrapper from "./blogs/blogs-list/BlogsList";
import GoalsListWrapper from "./goals/goals-list/GoalsList";
import LandingButtonWrapper from "./introduction/landing-button/LandingButton";
import PeopleWrapper from "./introduction/people/People";
import TextWrapper from "./introduction/text/Text";
import ProfessorsWrapper from "./professors/Professors";
import ServicesListWrapper from "./services-section/services-section-list/ServicesList";
import { useTranslation } from "react-i18next";

const LandingWrapper = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap gap-10 bg-background text-text">
      <div className="flex flex-wrap justify-center lg:justify-between w-full gap-2">
        <div className="hidden m-auto lg:block">
          <PeopleWrapper />
        </div>
        <TextWrapper />
        <div className="block m-auto w-1/2 lg:hidden">
          <PeopleWrapper />
        </div>
        <LandingButtonWrapper />
      </div>

      <GoalsListWrapper />
      <h2 className="text-[32px] m-auto font-persian w-full font-bold">
        {t("OurServices")}
      </h2>
      <ServicesListWrapper />
      <h2 className="text-[32px] m-auto font-persian w-full font-bold">
        {t("GoodsCourses")}
      </h2>
      <h2 className="text-[32px] m-auto font-persian w-full font-bold">
        {t("GoodsBlogs")}
      </h2>
      <BlogsListWrapper />
      <ProfessorsWrapper />
    </div>
  );
};

export default LandingWrapper;
