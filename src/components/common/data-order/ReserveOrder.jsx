import { Button } from "@heroui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ReserveOrder = () => {
  const { t } = useTranslation();
  const [border, setBorder] = useState("text-text");
  const [background, setBackground] = useState("text-text");
  

  const changeBorder = () => {
    if (border == "text-text") {
      setBorder("border-red-700 text-red-700");
    } else {
      setBorder("text-text");
    }
    console.log(border);
  };
  const changeBackground = () => {
    if (background == "text-text") {
      setBackground("border-red-700 text-red-700");
    } else {
      setBackground("text-text");
    }
    console.log(background);
  };
  return (
    <div className="flex flex-nowrap gap-3 mt-4">
      <p className="font-bold text-text mt-1.5">{t("Order")}</p>
      <Button
        radius="full"
        variant="bordered"
        onPress={changeBackground}
        className={`${background}`}
      >
        <p className="font-bold">{t("Confirmed")}</p>
      </Button>
      <Button
        variant="bordered"
        radius="full"
        onPress={changeBorder}
        className={`${border}`}
      >
        <p className="font-bold">{t("NotConfirmed")}</p>
      </Button>
    </div>
  );
};

export default ReserveOrder;
