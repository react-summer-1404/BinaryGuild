import { Button } from "@heroui/button";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Order from "../../../core/icons/Order";

const CoursesOrder = ({ setFilter }) => {
  const { t } = useTranslation();
  const [border, setBorder] = useState("text-text");
  const [background, setBackground] = useState("text-text");
  const [background2, setBackground2] = useState("text-text");
  const [background3, setBackground3] = useState("text-text");

  const changeBorder = () => {
    if (border == "text-text") {
      setBorder("border-red-700 text-red-700");
    } else {
      setBorder("text-text");
    }
  };
  const changeBackground = () => {
    if (background == "text-text") {
      setBackground("border-red-700 text-red-700");
    } else {
      setBackground("text-text");
    }
  };
  const changeBackground2 = () => {
    if (background2 == "text-text") {
      setBackground2("border-red-700 text-red-700");
    } else {
      setBackground2("text-text");
    }
  };
  const changeBackground3 = () => {
    if (background3 == "text-text") {
      setBackground3("border-red-700 text-red-700");
    } else {
      setBackground3("text-text");
    }
  };
  return (
    <>
      <div className="block lg:hidden">
        <Button radius="full" className="bg-text2">
          <Order/>
          <p className="font-bold text-white pb-1">{t("Order")}</p>
        </Button>
      </div>
      <div className="lg:flex flex-nowrap gap-3 mt-4 hidden ">
        <p className="font-bold text-text mt-1.5">{t("Order")}</p>

        <Button
          radius="full"
          variant="bordered"
          onPress={changeBackground}
          className={`${background}`}
          onChange={(value) => {
            setFilter((prev) => ({
              ...prev,
              NewsCategoryId: value?.currentKey?.substring(2),
            }));
            console.log(value);
          }}
        >
          <p className="font-bold">{t("New")}</p>
        </Button>
        <Button
          variant="bordered"
          radius="full"
          onPress={changeBorder}
          className={`${border}`}
          onChange={(value) => {
            setFilter((prev) => ({
              ...prev,
              likeCount: value?.currentKey?.substring(2),
            }));
            console.log("like", value);
          }}
        >
          <p className="font-bold">{t("Popular")}</p>
        </Button>
        <Button
          variant="bordered"
          radius="full"
          onPress={changeBackground2}
          className={`${background2}`}
          onChange={(value) => {
            setFilter((prev) => ({
              ...prev,
              cost: value?.currentKey?.substring(2),
            }));
            console.log("cost", value);
          }}
        >
          <p className="font-bold">{t("Expensive")}</p>
        </Button>
        <Button
          variant="bordered"
          radius="full"
          onPress={changeBackground3}
          className={`${background3}`}
        >
          <p className="font-bold">{t("Cheapest")}</p>
        </Button>
      </div>
    </>
  );
};

export default CoursesOrder;
