import { useTranslation } from "react-i18next";
import Button from "../../button/Buttons";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { UserData } from "../../../../core/services/api/get-data";
import { useEffect } from "react";

const HeaderButtons = () => {
  const { t } = useTranslation();
  const { data: getProfile, isSuccess } = useQuery({
    queryKey: ["PROFILE"],
    queryFn: UserData,
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    retry: false,
  });
  useEffect(() => {
    if (getProfile) {
      const data = JSON.stringify(getProfile);
      localStorage.setItem("data", data);
    }
  }, [isSuccess]);

  return (
    <div className="rounded-3xl max-w-440px m-auto hidden lg:flex h-12 bg-black-900 text-center gap-2 pt-0.5">
      <div className="flex gap-4 pt-2 pr-2 pl-2">
        <Link to={"/"}>
          <p className="cursor-pointer hover:text-blue text-white">
            {t("Home")}{" "}
          </p>
        </Link>
        <Link to={"/courses-page"}>
          <p className="cursor-pointer hover:text-blue text-white">
            {t("Courses")}{" "}
          </p>
        </Link>
        <Link to={"/blogs-page"}>
          <p className="cursor-pointer hover:text-blue text-white">
            {t("Blogs")}{" "}
          </p>
        </Link>
        <Link to={"/about-us"}>
          <p className="cursor-pointer hover:text-blue text-white">
            {t("AboutUs")}{" "}
          </p>
        </Link>
      </div>
      <Button />
    </div>
  );
};

export default HeaderButtons;
