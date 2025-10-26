import { Button } from "@heroui/button";

const ServicesSectionWrapper = ({ name, description, image }) => {


  return (
    <div className="lg:w-2/5 lg:justify-around justify-between lg:h-[144px] h-60 w-full flex flex-wrap border-boarder bg-backgroundColor rounded-4xl border-[0.5px] lg:gap-0.5">
      <Button
        isIconOnly
        color="warning"
        variant="faded"
        className="border-2 m-8 lg:w-[13%] h-[74px] w-19 mb-0 border-boarder bg-background rounded-full"
      >
        <img src={image} className="m-auto" />
      </Button>
      <div className="lg:w-[74%] p-6 w-full items-start lg:mt-auto mb-auto">
        <h2 className="font-persian w-[100%] text-[20px] text-justify font-bold">
          {name}
        </h2>
        <p className="font-persian w-[100%] text-muted text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServicesSectionWrapper;
