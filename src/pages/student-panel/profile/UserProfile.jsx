import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";

const UserProfile = () => {
  const { t } = useTranslation();
  const [background1, setBackground1] = useState("bg-forgetpassbtn text-blue border-forgetpassbtn");
  const [background2, setBackground2] = useState();
  const [background3, setBackground3] = useState();
  const [background4, setBackground4] = useState();


  const ChangeBackground1 = () => {
    if (background1 == "") {
      setBackground1("bg-forgetpassbtn text-blue border-forgetpassbtn");
      setBackground2("");
      setBackground3("");
      setBackground4("");
    } else {
      setBackground1("");
    }
  };
  const ChangeBackground2 = () => {
    if (background2 == "") {
      setBackground2("bg-forgetpassbtn text-blue border-forgetpassbtn");
      setBackground1("");
      setBackground3("");
      setBackground4("");
    } else {
      setBackground2("");
    }
  };
  const ChangeBackground3 = () => {
    if (background3 == "") {
      setBackground3("bg-forgetpassbtn text-blue border-forgetpassbtn");
      setBackground1("");
      setBackground2("");
      setBackground4("");
    } else {
      setBackground3("");
    }
  };
  const ChangeBackground4 = () => {
    if (background4 == "") {
      setBackground4("bg-forgetpassbtn text-blue border-forgetpassbtn");
      setBackground1("");
      setBackground2("");
      setBackground3("");
    } else {
      setBackground4("");
    }
  };
  return (
    <div className="w-11/12 flex flex-nowrap m-auto">
        <div className="w-1/5 flex flex-wrap h-1/4 ">
          <p className="w-full text-right h-0 font-bold text-2xl pb-0 p-4">
            {t("MyProfile")}
          </p>
          <div className="w-full text-right text-muted gap-6 flex mt-10 flex-wrap p-4 ">
            <Link
              to={"/panel/profile"}
              onClick={ChangeBackground1}
              className={`w-full rounded-2xl p-2 ${background1}`}
            >
              <p>{t("Information")}</p>
            </Link>
            <Link
              to={"/panel/profile/images"}
              onClick={ChangeBackground2}
              className={`w-full rounded-2xl p-2 ${background2}`}
            >
              <p>{t("Images")}</p>
            </Link>
            <Link
              to={"/panel/profile/homeAddress"}
              onClick={ChangeBackground3}
              className={`w-full rounded-2xl p-2 ${background3}`}
            >
              <p>{t("HomeAddress")}</p>
            </Link>
            <Link
              to={"/panel/profile/links"}
              onClick={ChangeBackground4}
              className={`w-full rounded-2xl p-2 ${background4}`}
            >
              <p>{t("Links")}</p>
            </Link>
          </div>
        </div>

      <Outlet />
    </div>
  );
};

export default UserProfile;
