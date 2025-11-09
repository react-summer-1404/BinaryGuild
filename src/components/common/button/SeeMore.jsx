import { Button } from "@heroui/button";
import React from "react";
import { useTranslation } from "react-i18next";

const SeeMore = () => {
  const {t} = useTranslation()
  return (
    <Button radius="full" className="bg-black-900 font-persian m-auto">
      <p className="font-persian text-white m-auto">{t("SeeMore")}</p>
    </Button>
  );
};

export default SeeMore;
