import "./landings-sections/LandingPeople"
import { useTranslation } from "react-i18next";
import PeopleWrapper from "./landings-sections/LandingPeople";
import LandingButtonWrapper from "./landings-sections/LandingButton";
import GoalsWrapper from "./landings-sections/Goals";
import ServicesSectionWrapper from "./landings-sections/ServicesSection";
import BlogsWrapper from "./landings-sections/Blogs";
import ProfessorsWrapper from "./landings-sections/Professors";

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
        <LandingButtonWrapper/>
      </div>

      <GoalsWrapper />
      <h2 className="text-[32px] m-auto font-persian w-full font-bold">
        {t("OurServices")}
      </h2>
      <ServicesSectionWrapper />
      <h2 className="text-[32px] m-auto font-persian w-full font-bold">
        {t("GoodsCourses")}
      </h2>
      <h2 className="text-[32px] m-auto font-persian w-full font-bold">
        {t("GoodsBlogs")}
      </h2>
      <BlogsWrapper />
      <ProfessorsWrapper />
    </div>
  );
};

export default LandingWrapper;
