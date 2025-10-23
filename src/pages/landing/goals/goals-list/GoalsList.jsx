import GoalsBackground from "../../../../assets/icons/Group 19.svg";
import Goals from "../Goals";
import GoalsData from "../../../../core/constant/goals-data/GoalsData";

const GoalsListWrapper = () => {
  return (
    <>
      <h2 className="text-[32px] m-auto font-persian font-bold">
        اهداف ما در آکادمی
      </h2>
      <div className="grid grid-cols-4 max-[1340px]:grid-cols-2 max-[670px]:grid-cols-1  justify-items-center gap-y-2 flex-wrap w-[100%] relative">
        <img src={GoalsBackground} className="absolute top-[30%] " />
        {GoalsData.map((value) => {
          return (
            <Goals
              key={value.id}
              id={value.id}
              name={value.name}
              description={value.description}
              image={value.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default GoalsListWrapper;
