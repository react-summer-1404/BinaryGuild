import React from "react";
import UserIcon from "../../../../core/icons/UserIcon";
import { Button } from "@heroui/button";
import { useTranslation } from "react-i18next";

const SignOut = () => {
  const { t } = useTranslation();
  return (
    <div className="p-2">
      <Button color="danger" startContent={<UserIcon />} variant="bordered">
        {t("DeleteUser")}
      </Button>
    </div>
  );
};

export default SignOut;
