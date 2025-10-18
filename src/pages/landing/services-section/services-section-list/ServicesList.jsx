import ServicesData from "../../../../core/constant/services-data/ServicesData";
import ServicesWrapper from "../ServicesSection";

const ServicesListWrapper = () => {
  return (
    <div className="flex flex-wrap w-[100%] gap-8 justify-center">
      {ServicesData.map((value) => {
        return (
          <ServicesWrapper
            key={value.id}
            id={value.id}
            name={value.name}
            description={value.description}
            image={value.image}
          />
        );
      })}
    </div>
  );
};

export default ServicesListWrapper;
