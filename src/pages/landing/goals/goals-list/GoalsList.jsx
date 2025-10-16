import React from "react";
import GoalsData from "../goals-data/GoalsData";
import Goals from "../Goals";
import GoalsTheme from "../goals-theme/GoalsTheme";

const GoalsList = () => {
  return (
    <div className="flex w-[100%] relative">
      <GoalsTheme />
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

export default GoalsList;
