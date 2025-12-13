import { Button } from "@heroui/button";
import React from "react";
import { useTranslation } from "react-i18next";

const ApplyChanges = () => {
  const { t } = useTranslation();
  return (
      <Button color="primary" radius="full" className="mr-11 font-persian mt-4">
        {t("ApplyChanges")}
      </Button>
  );
};

export default ApplyChanges;
