import React, { useState } from "react";
import { Link } from "react-router-dom";
import Stepper from "../../Stepper";
import GetEmail from "../steps/GetEmail";
import GetCode from "../steps/GetCode";
import GetUserInfo from "../steps/GetUserInfo";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RegisterWrapper = () => {

  return (
    <Register/>
  );
};

export default RegisterWrapper;
