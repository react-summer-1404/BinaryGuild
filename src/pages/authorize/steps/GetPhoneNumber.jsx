import React from "react";
import AuthButton from "../../../components/common/button/AuthButton";
const GetPhoneNumber = () => {
  return (
    <div>
      <form action="" className="flex flex-col">
        <label htmlFor="phoneNumber">شماره همراه</label>
        <input
          className="border-1 border-black "
          type="number"
          id="number"
          placeholder="شماره همراه خود را وارد کنید"
        />
      </form>
      <AuthButton text={"ارسال کد تایید"} />

    </div>
  );
};

export default GetPhoneNumber;
