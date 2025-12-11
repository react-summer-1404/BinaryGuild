import { Button } from "@heroui/button";

const AboutCard = ({ name, image, desc }) => {
  return (
    <div className="w-2/5 bg-backgroundBlue p-4 rounded-3xl shadow-blue-950 shadow-xs flex flex-wrap gap-2">
      <div className="w-11/12 m-auto flex gap-2">
        <Button
          isIconOnly
          color="warning"
          variant="faded"
          className="border-2 lg:w-[18%] h-14 w-19 mb-0 border-boarder  bg-purple  rounded-full"
        >
          <img src={image} className="m-auto" />
        </Button>
        <p className="font-bold mt-2.5 text-[20px] text-text">{name}</p>
      </div>
      <div className="w-full">
        <p className="w-11/12 text-start font-persian text-text m-auto">{desc}</p>
      </div>
    </div>
  );
};

export default AboutCard;
