import React from "react";
import { useTranslation } from "react-i18next";
import AboutList from "./about-list/AboutList";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-wrap gap-10 mt-5">
      <div className="w-full bg-forgetpassbtn p-4">
        <p className="text-text m-auto text-3xl font-[Poppins]  ">
          {t("WhoAreWe")}
        </p>
      </div>
      <div className="w-10/12 m-auto flex flex-wrap ">
        <div className="w-1/2 m-auto">
          <img src="/src/assets/images/about-us.png" />
        </div>
        <div className="w-1/2 flex flex-wrap gap-6 m-auto">
          <div className="bg-lightBlue w-1/3 rounded-2xl p-0.5">
            <p className="text-blue-950 font-persian">{t("LearnMore")}</p>
          </div>
          <div className="w-3/4 flex flex-nowrap">
            <p className="text-textDarkBlue font-bold text-2xl text-start">
              {t("EmpoweringGoals")} {t("potential")} {t("EmpoweringGoals2")}
            </p>
          </div>
          <div className="w-full flex flex-wrap gap-2">
            <div className="flex gap-2 w-11/12 items-start">
              <img src="/src/assets/icons/Section → List → Item.svg" />
              <p className="text-textDarkBlue font-persian mt-0.5">
                {t("TheBestTeachers")}
              </p>
            </div>
            <div className="flex gap-2 w-11/12 items-start ">
              <img src="/src/assets/icons/Section → List → Item.svg" />
              <p className="text-textDarkBlue font-persian mt-0.5">
                {t("AccessYourClass")}
              </p>
            </div>
            <div className="flex gap-2 w-11/12 items-start ">
              <img src="/src/assets/icons/Section → List → Item.svg" />
              <p className="text-textDarkBlue font-persian mt-0.5">
                {t("FlexibleCourse")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 m-auto mb-5">
        <AboutList/>
      </div>
    </div>
  );
};

export default AboutUs;
