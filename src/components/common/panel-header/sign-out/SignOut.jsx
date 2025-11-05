import React from "react";
import UserIcon from "../../../../core/icons/UserIcon";
import { Button } from "@heroui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SignOut = () => {
  const { t } = useTranslation();
  return (
    <Link to={"/"} className="p-2">
      <Button color="danger" startContent={<UserIcon />} variant="bordered">
        {t("DeleteUser")}
      </Button>
    </Link>
  );
};

export default SignOut;
