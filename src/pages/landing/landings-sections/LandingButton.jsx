import { Button } from "@heroui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const LandingButton  = () => {
  const {t} = useTranslation();
  return (
    <div className="w-[150px] h-[20%] lg:m-auto text-start flex flex-wrap gap-3">
      <div>
        <p className=" font-persian">{t("Now")}</p>
        <p className=" font-persian">{t("Start")}</p>
      </div>
      <Link to={"/courses"}>
        <Button radius="full" className="bg-black-900 text-white font-persian">{t("NewCourses")}
        </Button>
      </Link>
    </div>
  );
};

export default LandingButton ;
