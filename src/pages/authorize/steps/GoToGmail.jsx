import AuthButton from "../../../components/common/button/AuthButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ForgetPass } from "../../../core/services/api/post-data";
import { Reset } from "../../../core/services/api/get-data";

const GoToGmail = ({ onNext }) => {
  const [errorCode, setErrorCode] = useState("");
  const [getUserInfo, setGetUserInfo] = useState("");

  const navigate = useNavigate();
  const GoHome = () => {
    navigate("/");
  };

  const handleCode = (e) => {
    const value = e.target.value;
    setGetUserInfo(value);
  };

  const handleError = async (e) => {
    e.preventDefault();
    if (getUserInfo.trim() === "") {
      setErrorCode("لطفا ایمیل معتبر وارد کنید");
      return;
    } else {
      setErrorCode("");
    }

    try {
      const response = await ForgetPass({
        email: getUserInfo,
        baseUrl: "https://localhost:5173/resetpassword",
      });

      console.log("response", response);
      onNext();
    } catch (error) {
      console.log("error", error.response || error.message);
    }
    try {
      const response = await Reset("0000");
      console.log("reset confirmed",response);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="w-4/5">
      <h2 className="text-[28px] font font-[700] text-black mt-[75px]">
        فراموشی رمزعبور!{" "}
      </h2>
      <p className="text-[#707070] font-[500] mt-[12px] text-[16px]">
        اگر رمزعبور خود را فراموش کرده‌اید ایمیل خود را وارد کنید تا لینک صفحه
        تغییر رمزعبور برای شما ارسال شود{" "}
      </p>

      <div>
        <form
          onSubmit={handleError}
          action=""
          className="flex flex-col mt-[48px]"
        >
          <label
            className="text-[#2F2F2F] font-[600] text-[16px]"
            htmlFor="email"
          >
            ایمیل{" "}
          </label>
          <input
            className="mt-[8px] w-[398px] h-[48px] border-1 p-[16px] rounded-[24px] border-[#DCDCDC] text-[#707070] font-[500] text-[14px]"
            type="email"
            id="email"
            value={getUserInfo}
            onChange={handleCode}
            placeholder="ایمیل خود را وارد کنید"
          />
          <p className="mt-[4px] font-bold text-[12px] text-[red]">
            {errorCode}
          </p>

          <AuthButton text={"ارسال لینک"} type="submit" />
        </form>
      </div>
      <div className=" w-[397px] flex flex-col items-center justify-center ">
        <Link
          to={"/login"}
          className="cursor-pointer mt-[32px] flex items-center justify-center border-[1px] border-[#DCDCDC] rounded-[34px] w-[141px] h-[40px]"
        >
          <p className="text-[#3772FF]">{"بازگشت"}</p>
        </Link>
      </div>
    </div>
  );
};

export default GoToGmail;
