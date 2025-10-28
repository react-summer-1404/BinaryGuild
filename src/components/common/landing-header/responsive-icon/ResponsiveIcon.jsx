import { Button } from "@heroui/button";
import { Link } from "react-router-dom";
import Menu from "../../../../core/icons/Menu";
import HeaderMenu from "./header-menu/HeaderMenu";
import { useState } from "react";

const ResponsiveIcon = () => {
  const [menu, setMenu] = useState("hidden");

  return (
    <div className="mt-2 flex flex-wrap justify-end relative">
      <Button
        isIconOnly
        aria-label="OpenMenu"
        color="default"
        variant="faded"
        onPress={() => {
          menu === "hidden" ? setMenu("block") : setMenu("hidden");
          console.log("menu:", menu);
        }}
        className="bg-black-600 border-black-600 rounded-full lg:hidden block"
      >
        <Menu />
      </Button>
      <div className={`${menu} z-50`}>
        <HeaderMenu />
      </div>
    </div>
  );
};

export default ResponsiveIcon;
