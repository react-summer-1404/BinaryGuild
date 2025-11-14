import React from "react";
import UserIcon from "../../../../core/icons/UserIcon";
import { Button } from "@heroui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SignOut = () => {
  const { t } = useTranslation();
  const removeAccount=()=>{
    localStorage.removeItem("token")
  }
  return (
    <div className="w-14/12 h-1/5 flex items-end m-auto">
    <Link to={"/"} className="p-2 mt-[50%] ">
      <Button startContent={<UserIcon />} onPress={removeAccount} className="mr-4 ml-2 h-14 w-full border-3 border-rose-950 rounded-full"  variant="bordered">
        <p className="font-persian text-[18px] text-rose-950">{t("DeleteUser")}</p>
      </Button>
    </Link>
    </div>
  );
};

export default SignOut;
