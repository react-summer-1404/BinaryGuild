import { Link } from "react-router-dom";
import { Button } from "@heroui/button";
import { useTranslation } from "react-i18next";

const Buttons = () => {
  const { t } = useTranslation();

  // const login = () =>{
  //   if(){

  //   }else{

  //   }
  // }

  return (
    <div className="w-34 rounded-3xl pt-0.5 cursor-pointer">
      <Link to={"/register"}>
        <Button color="primary" radius="full" className="w-32 block">
          <p className="font-persian text-xs mt-1 font-bold">{t("Registration")}</p>
        </Button>
      </Link>
    </div>
  );
};

export default Buttons;
