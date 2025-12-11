import { Button } from "@heroui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import PreviousStage from "../../../../../core/icons/PreviousStage";
import Upload from "../../../../../core/icons/Upload";
import Plus from "../../../../../core/icons/Plus";

const SecondStage = ({ onPrevious, onNext }) => {
  const { t } = useTranslation();
  const [background, setBackground] = useState("");
  const [placeholder] = useState();
  const [image, setImage] = useState("")

  console.log("image",image)
  const changeBackground = () => {
    if (placeholder == "") {
      setBackground("bg-gray");
    } else {
      setBackground("bg-blue");
    }
  };
  const handelRegistration = () => {
    try {
        onNext();
    } catch (error) {
      console.log(error);
    }
  };
  const handelReturn = () => {
    try {
      onPrevious();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-11/12 gap-8 flex flex-nowrap m-auto">
      <div className="w-[12%] ">
        <p
          onClick={handelReturn}
          className="text-start flex gap-1 text-[10px] mt-[200%] text-white font-persian"
        >
          <img src="/src/assets/icons/back-arrow.png" className="mt-0.5 size-4" />
          {t("PreviousStage")}
        </p>
      </div>
      <div className="flex flex-wrap w-2/5 gap-8">
        <div className="w-3/4 m-auto">
          <p className="text-white text-[14px] font-bold text-persian ">
            {t("SelectDesired")}
          </p>
        </div>
        <div className="bg-muted h-20 w-20 m-auto rounded-[8px] ">
          <Upload />
        </div>
        <div className="w-11/12 m-auto">
          <Button
            onPress={handelRegistration}
            className={`mt-5 w-55 text-center text-white ${background}`}
          >
            <p className="text-persian font-bold">{t("RecordInformation")}</p>
          </Button>
        </div>
      </div>
      <div className="border-dashed rounded-3xl border-2 w-2/6">
        <div className="m-auto w-11/12 mt-18">
          <p className="text-white font-bold text-persian">
            {t("PaymentSlip")}
          </p>
          <label htmlFor="image" className="w-11/12 rounded-3xl flex p-3 gap-2">
            <div className="w-1/12 m-auto">
              <Plus />
              <input
                type="file"
                name="image"
                id="image"
                className="text-[0px]"
                onClick={changeBackground}
                placeholder={setImage}
              />
              <img src={image}/>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SecondStage;
