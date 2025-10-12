// import React, { useState } from "react";
import { Link } from "react-router-dom";
import Stepper from "../../Stepper";
import GetPhoneNumber from "../steps/GetPhoneNumber";
const Register = ({head,description,GoTo}) => {
  // const [getCode, setGetCode] = useState(null);
  // const [getPassword, setGetPassword] = useState(null);

  return (
    <div className="p-5 flex flex-col text-right w-[648px] mr-[30px] ">

      <Stepper />
      <h2>{head}</h2>
      <p>{description}</p>
      <GetPhoneNumber />
      <div>
        <p>{GoTo}</p>
      </div>
      
    </div>
  );
};

export default Register;
