import GoalsBackground from "../../../../assets/icons/Group 19.svg";
import Goals from "../Goals";
import GoalsData from "../../../../core/constant/goals-data/GoalsData";

const GoalsListWrapper = () => {
  return (
    <div className="flex w-[100%] relative">
      <img src={GoalsBackground} className="absolute top-[30%]"/>
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
  );
};

export default GoalsListWrapper;
