import { Button } from "@heroui/button";
import { useState } from "react";
import Moon from "../../../core/icons/Moon";

const ThemeModes = () => {
  const dark = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useState(dark.matches);

  const changeMode = () => {
    setIsDark(!isDark);
    console.log(dark);
    document.documentElement.classList.toggle("dark", isDark);
    console.log(dark);
  };

  return (
    <div>
      <Button
        isIconOnly
        aria-label="dark/light mode"
        color="default"
        variant="faded"
        onPress={changeMode}
        className="bg-boarder border-boarder lg:inline-block hidden"
      >
        <Moon />
      </Button>
    </div>
  );
};

export default ThemeModes;
