import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const GetNewCode = () => {
    const { t } = useTranslation();
  
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(true);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setCanResend(true);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [isRunning]);

  const handleResend = () => {
    setTimeLeft(60);
    setCanResend(false);
    setIsRunning(true);
  };

  return (
    <div className="bg-[#F6F6F6] rounded-[40px] cursor-pointer h-[36px] w-[190px] flex justify-center items-center mt-[16px]">
      <p
        onClick={handleResend}
        className="text-[#3772FF] font-[600] text-[16px]"
      >
        {" "}
        {canResend
          ? t("GetCodeAgain")
          : t("GetCodeAgainTimer", {time:formatTime(timeLeft)})
        }
      </p>
    </div>
  );
};

export default GetNewCode;
