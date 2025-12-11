import { Button } from "@heroui/button";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const FirstStage = ({ onNext }) => {
  const { t } = useTranslation();
  const [background, setBackground] = useState("");
  const [placeholder1] = useState("");
  const [placeholder2] = useState("");
  const [placeholder3] = useState("");

  const changeBackground = () => {
    if ((placeholder1 === "", placeholder2 === "", placeholder3 === "")) {
      setBackground("bg-blue");
      toast.success("yeeeeeeeees");
    } else {
      setBackground("");
      toast.error("nooooooooooo");
    }
  };
  const handelRegistration = () => {
    try {
      if ((placeholder1 == "", placeholder2 == "", placeholder3 == "")) {
        onNext();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-3/4 flex flex-nowrap m-auto">
      <Toaster />
      <div className="flex flex-wrap w-1/2 gap-2">
        <div className="flex flex-wrap gap-2 w-1/2 m-auto">
          <p className="text-start text-white font-persian">{t("PaymentID")}</p>
          <input
            placeholder={placeholder1}
            className="bg-gray-450 rounded-2xl p-2"
            onClick={changeBackground}
            type="number"
          />
        </div>
        <div className="flex flex-wrap gap-2 w-1/2 m-auto">
          <p className="text-start text-white font-persian">
            {t("PaymentsDate")}
          </p>
          <input
            placeholder={placeholder2}
            className="bg-gray-450 rounded-2xl p-2"
            onClick={changeBackground}
            type="number"
          />
        </div>
        <div className="flex flex-wrap gap-2 w-1/2 m-auto">
          <p className="text-start text-white text-[15px] font-persian">
            {t("AmountPaid")}
          </p>
          <input
            placeholder={placeholder3}
            className="bg-gray-450 rounded-2xl p-2"
            onClick={changeBackground}
            type="number"
          />
        </div>
      </div>
      <div className="w-1/4 m-auto">
        <Button
          onPress={handelRegistration}
          className={`rounded-2xl mt-[180%] text-center text-white ${background}`}
        >
          <p className="text-persian font-bold">{t("RecordInformation")}</p>
        </Button>
      </div>
    </div>
  );
};

export default FirstStage;
