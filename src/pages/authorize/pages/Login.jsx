import React, { useState } from "react";
import Stepper from "../../Stepper";
import GetPhoneNumberLogin from "../steps/GetPhoneNumberLogin";
import TwoStepLoginWrapper from "../steps/TwoStepLoginWrapper";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [step, setStep] = useState(1);

  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  const { t } = useTranslation();

  return (
    <Login/>
  );
};

export default LoginWrapper;
