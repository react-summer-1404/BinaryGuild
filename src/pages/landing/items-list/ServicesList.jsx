import { useTranslation } from "react-i18next";
import ServicesData from "../../../core/constant/services-data/ServicesData";
import Services  from "../landings-sections/ServicesSection";

const ServicesList  = () => {
  const {t} = useTranslation()
  return (
    <div className="flex flex-wrap w-[100%] gap-8 justify-center">
      {ServicesData.map((value) => {
        return (
          <Services 
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

export default ServicesList ;
