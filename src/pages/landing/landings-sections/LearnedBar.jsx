import { motion as m } from "framer-motion";


export const CircleBorder = () => {
  return (
    <div className=" ">
      <div className="size-5 rounded-full grid place-items-center ">
        <div className="size-4 border-6 w-5 h-5 bg-background border-gray-450 rounded-full "> </div>
      </div>
    </div>
  );
};

const LearnedBar = () => {
  console.log('learned bar')
  return (
    <div
      dir="ltr"
      className="w-full py-3 overflow-x-hidden flex flex-wrap bg-MainBg"
    >
      <div
        dir="ltr"
        className="relative w-full bg-VioletBlue flex  items-center"
      >
        <div className="w-1/5">
          <img src="/src/assets/icons/Rectangle (4).svg" className="m-auto" />
        </div>
        <div className="w-1/5">
          <img src="/src/assets/icons/Rectangle (3).svg" className="m-auto"  />
        </div>
        <div className="w-1/5">
          <img src="/src/assets/icons/Rectangle (2).svg" className="m-auto"  />
        </div>
        <div className="w-1/5">
          <img src="/src/assets/icons/Rectangle (1).svg" className="m-auto"  />
        </div>
        <div className="w-1/5">
          <img src="/src/assets/icons/Rectangle.svg" className="m-auto"  />
        </div>
      </div>
      <div dir="ltr" className=" relative w-full bg-gray-450 flex items-center">
        <m.div
          dir="ltr"
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 12 }}
          className="w-full h-1.5 bg-blue flex items-center"
        >
        </m.div>
        <div className="absolute flex justify-around w-full ">
          <CircleBorder />
          <CircleBorder />
          <CircleBorder />
          <CircleBorder />
          <CircleBorder />
        </div>
      </div>
    </div>
  );
};

export default LearnedBar;
