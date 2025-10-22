import React, { useEffect, useState } from "react";

const GetNewCode = () => {
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
          return;
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
          ? " ارسال مجدد کد"
          : `ارسال مجدد کد تایید ${formatTime(timeLeft)}`}
      </p>
    </div>
  );
};

export default GetNewCode;
