import { useTranslation } from "react-i18next";
import ServicesData from "../../../../core/constant/services-data/ServicesData";
import ServicesWrapper from "../ServicesSection";

const ServicesListWrapper = () => {
  const {t} = useTranslation()
  return (
    <div className="flex flex-wrap w-[100%] gap-8 justify-center">
      {ServicesData.map((value) => {
        return (
          <ServicesWrapper
            key={value.id}
            id={value.id}
            name={t("ServicesName"+value.id)}
            description={t("ServicesDescription"+value.id)}
            image={value.image}
          />
        );
      })}
    </div>
  );
};

export default ServicesListWrapper;
