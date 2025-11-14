import { Button } from "@heroui/button";
import { useEffect, useState } from "react";
import Moon from "../../../core/icons/Moon";

const ThemeModes = () => {
  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useState(()=>{
    const saved = localStorage.getItem("theme")
    return saved ? saved === "dark" : dark;
  });
  useEffect(()=>{
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark? "dark" : "light")
  },[isDark])

  const changeMode = () => {
    setIsDark(prev=>!prev);
    
  };

  return (
    <div>
      <Button
        isIconOnly
        aria-label="dark/light mode"
        variant="faded"
        onPress={changeMode}
        className="bg-forgetpassbtn border-forgetpassbtn lg:inline-block hidden"
      >
        <Moon />
      </Button>
    </div>
  );
};

export default ThemeModes;
