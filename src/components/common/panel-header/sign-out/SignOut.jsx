import React from "react";
import UserIcon from "../../../../core/icons/UserIcon";
import { Button } from "@heroui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SignOut = () => {
  const { t } = useTranslation();
  return (
    <div className="w-14/12 h-1/5 flex items-end m-auto">
    <Link to={"/"} className="p-2">
      <Button startContent={<UserIcon />} className="mr-4 ml-2 h-14 w-18/12 border-3 border-rose-950 rounded-full"  variant="bordered">
        <p className="font-persian text-[18px] text-rose-950">{t("DeleteUser")}</p>
      </Button>
    </Link>
    </div>
  );
};

export default SignOut;
