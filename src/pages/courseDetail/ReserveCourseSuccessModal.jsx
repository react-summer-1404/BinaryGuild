import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@heroui/button";


const ReserveCourseSuccessModal = ({closeReserveBox}) => {
  const { t } = useTranslation();


  return (
    <div className="border text-right overflow-y-scroll flex flex-col justify-between scroll- text-text shadow-shadow shadow-xs border-boarder p-4 fixed inset-0 z-50 m-auto rounded-[32px] bg-authcommonbackground w-[430px] h-[369px] ">
      <h2 className=" w-full mt-0 mb-0 h-[30px] text-blue flex  justify-center text-[20px] font-bold m-auto "> {t("reserveBoxHead")}</h2>

      <div className=" w-full h-50 flex  ">
        <div className="w-1/3 border border-black ">steppers</div>
        <div className="flex items-center justify-end w-2/3"> <p className="w-[250px]  h-[46px] font-bold text-[16px] text-[#707070]  ">{t("reserveDescription")}</p>  </div>
      </div>
      <div className="flex justify-between">
        <Button className="bg-blue w-[212px] h-[47px] rounded-[40px] font-bold text-[20px] ">{t("MyReserve")}</Button>
        <button onClick={closeReserveBox}  className="text-[#2F2F2F] font-medium rounded-[40px] bg-[#DCDCDC] w-[154px] h-[47px] rounded-[] ">{t("ok")}</button>

      </div>
    </div>
  );
};

export default ReserveCourseSuccessModal;
