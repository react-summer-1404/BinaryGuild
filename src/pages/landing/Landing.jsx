import { useTranslation } from "react-i18next";
import GoalsList from "./items-list/GoalsList";
import ServicesList from "./items-list/ServicesList";
import TopBlogsList from "./items-list/TopBlogsList";
import TopCoursesList from "./items-list/TopCoursesList";
import LandingButton from "./landings-sections/LandingButton";
import "./landings-sections/LandingPeople";
import People from "./landings-sections/LandingPeople";
import Text from "./landings-sections/LandingText";
import LearnedBar from "./landings-sections/LearnedBar";
import Professors from "./landings-sections/Professors";

const Landing = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap  gap-10 m-auto bg-background text-text">
      <div className="flex flex-wrap justify-center lg:justify-between w-full gap-2">
        <div className="hidden m-auto lg:block">
          <People />
        </div>
        <Text  />
        <div className="block m-auto w-2/3 lg:hidden">
          <People  />
        </div>
        <LandingButton />
      </div>
      <div className="w-full mt-10">
        <LearnedBar />
      </div>
      <GoalsList />
      <h2 className="text-[32px] m-auto font-persian w-full font-bold">
        {t("OurServices")}
      </h2>
      <ServicesList />
      <h2 className="text-[32px] m-auto font-persian w-full font-bold">
        {t("GoodsCourses")}
      </h2>
      <TopCoursesList />
      <h2 className="text-[32px] m-auto font-persian w-full font-bold">
        {t("GoodsBlogs")}
      </h2>
      <TopBlogsList />
      <Professors />
    </div>
  );
};

export default Landing;
