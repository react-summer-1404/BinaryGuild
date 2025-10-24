import { Link } from "react-router-dom";
import { Button } from "@heroui/button";
import { useTranslation } from "react-i18next";

const Buttons = () => {
  const { t } = useTranslation();
  return (
    <div className="w-28 rounded-3xl pt-0.5 cursor-pointer">
      <Link to={"/register"}>
        <Button color="primary" radius="full" className="w-26">
          <p className="font-persian text-xs font-bold">{t("Registration")}</p>
        </Button>
      </Link>
    </div>
  );
};

export default Buttons;
