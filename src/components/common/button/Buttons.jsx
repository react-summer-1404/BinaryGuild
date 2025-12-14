import { Button } from "@heroui/button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ImageFallBack from "../image-fallback/ImageFallBack";
import fallBack from "../../../assets/icons/Graggle – 03.svg";

const Buttons = () => {
  const { t } = useTranslation();
  const [profile, setProfile] = useState(true);

  const profileData = JSON.parse(localStorage.getItem("data"));

  const login = () => {
    if (localStorage.getItem("token")) setProfile(true);
    else setProfile(false);
  };

  useEffect(() => {
    login();
  }, []);
  console.log("profileData?.userImage :", profileData);

  const RenderItem = () => {
    if (profile) {
      return (
        <div className="w-10 rounded-3xl pl-2 pb-1 pt-1.5 cursor-pointer">
          <Link to={"/panel"}>
            <ImageFallBack
              src={profileData?.currentPictureAddress}
              fallBack={fallBack}
              className="w-full rounded-4xl "
            />
          </Link>
        </div>
      );
    } else {
      return (
        <div className="w-33 rounded-3xl pt-0.5 cursor-pointer">
          <Link to={"/register"}>
            <Button color="primary" radius="full" className="w-32 block">
              <p className="font-persian text-xs mt-1 font-bold">
                {t("Registration")}
              </p>
            </Button>
          </Link>
        </div>
      );
    }
  };

  return RenderItem();
};

export default Buttons;
