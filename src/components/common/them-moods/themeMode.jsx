import { Button } from "@heroui/button";
import React from "react";
import { useState } from "react";

const ThemeModes = () => {
  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [mode, setMode] = useState(dark);

  const changeMode = () => {
    setMode(!mode);
  };

  return (
    <div>
      <Button
        isIconOnly
        aria-label="dark/light mood"
        color="default"
        variant="faded"
        onPaste={changeMode}
        className="bg-black-900"
      >
        <img src="/src/assets/icons/moon-02.svg" />
      </Button>
    </div>
  );
};

export default ThemeModes;
