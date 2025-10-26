import { useTranslation } from "react-i18next";
import Cross from "../../../../../core/icons/Cross";
import FooterIcon from "../../../footer/footer-icon/FooterIcon";
import Logo from "../../../logo/logo";
import { useState } from "react";
import { Button } from "@heroui/button";

const HeaderMenu = () => {
  const { t } = useTranslation();
  const [menu, setMenu] = useState("block");
  const [hideButton, setHideButton] = useState();
  return (
    <div
      className={`${menu} bg-black-600 w-100 h-auto flex flex-wrap justify-start gap-30`}
    >
      <div className="flex justify-around w-full">
        <Logo />

        <Button
          isIconOnly
          aria-label="OpenMenu"
          color="default"
          variant="faded"
          onPress={() => {
            menu === "block" ? setMenu("hidden") : setHideButton("block");
            console.log("menu:" , menu)
          }}
          className={`${hideButton}bg-black-600 border-black-600 rounded-full lg:hidden inline-block`}
        >
          <Cross />
        </Button>
      </div>
      <div className="border-b-2 font-bold font-persian w-full justify-start text-[32px]">
        <p className="border-white border-b-2 w-full text-start p-4 pb-0">
          {t("Home")}
        </p>
        <p className="border-white border-b-2 w-full text-start p-4 pb-0">
          {t("Courses")}
        </p>
        <p className="border-white border-b-2 w-full text-start p-4 pb-0">
          {t("Blogs")}
        </p>
        <p className="border-white border-b-2 w-full text-start p-4 pb-0">
          {t("AboutUs")}
        </p>
        <p className="border-white border-b-2 w-full text-start p-4 pb-0">
          {t("ContactUs")}
        </p>
      </div>
      <div className="border-t-2 border-white p-4 w-11/12 flex justify-center mr-4">
        <FooterIcon />
      </div>
    </div>
  );
};

export default HeaderMenu;
