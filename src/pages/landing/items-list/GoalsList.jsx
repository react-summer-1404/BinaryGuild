import GoalsBackground from "../../../assets/icons/Group 19.svg";
import { useTranslation } from "react-i18next";
import Goals  from "../landings-sections/Goals";
import GoalsData from "../../../core/constant/goals-data/GoalsData";

const GoalsList  = () => {
  const {t} = useTranslation()
  return (
    <>
      <h2 className="text-[32px] m-auto font-persian font-bold">{t("OurGoals")}</h2>
      <div className="grid grid-cols-4 max-[1340px]:grid-cols-2 max-[670px]:grid-cols-1  justify-items-center gap-y-2 flex-wrap w-[100%] relative">
        <img src={GoalsBackground} className="absolute top-[30%] " />
        {GoalsData.map((value) => {
          return (
            <Goals 
              key={value.id}
              id={value.id}
              name={t("GoalsName"+value.id)}
              description={t("GoalsDescription"+value.id)}
              image={value.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default GoalsList ;
