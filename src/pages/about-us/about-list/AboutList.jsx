import React from "react";
import AboutUsData from "../../../core/constant/about-us-data/AboutUsData";
import AboutUs from "../AboutUs";
import AboutCard from "./AboutCard";
import { useTranslation } from "react-i18next";

const AboutList = () => {
  const { t } = useTranslation();
  return (
    <div className="flex w-full flex-wrap">
      <div className="flex flex-wrap w-3/4 m-auto">
        <div className="bg-lightBlue w-1/3 m-auto rounded-2xl p-0.5">
          <p className="text-blue-950 font-persian">{t("WhatWeOffer")}</p>
        </div>
        <p className="w-full text-2xl text-textDarkBlue font-bold">
          {t("LearnNewSkills")}
        </p>
      </div>
      <div className="w-full flex flex-nowrap gap-6 mt-10">
      {AboutUsData.map((value) => {
        return(
        <AboutCard
          key={value.id}
          id={value.id}
          name={t("TeachersAndCourses" + value.id)}
          image={value.image}
          desc={t("Description" + value.id)}
        />)
      })}</div>
    </div>
  );
};

export default AboutList;
