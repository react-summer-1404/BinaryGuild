import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDebounce } from "use-debounce";
import Calender from "../../../../core/icons/Calender";

const Date = ({ setFilter }) => {
  const [firstDate, setFirstDate] = useState();
  const [secondDate, setSecondDate] = useState();
  const { t } = useTranslation();
  const [value1] = useDebounce(firstDate, 1000);
  const [value2] = useDebounce(secondDate, 1000);
  useEffect(() => {
    console.log("value1", typeof value1, "firstDate", typeof firstDate);
    if (value1 !== "") {
      setFilter((prev) => ({ ...prev, StartDate: value1 }));
    } else setFilter((prev) => ({ ...prev, StartDate: undefined }));
  }, [value1]);
  useEffect(() => {
    console.log("value2", typeof value2, "secondDate", typeof secondDate);
    if (value2 !== "") {
      setFilter((prev) => ({ ...prev, EndDate: value2 }));
    } else setFilter((prev) => ({ ...prev, EndDate: undefined }));
  }, [value2]);
  return (
    <div className="w-11/12 flex flex-wrap m-auto gap-4">
      <div className="flex flex-nowrap w-full gap-2">
        <Calender />
        <p className="text-text">{t("Date")}</p>
      </div>
      <div className="flex w-full flex-nowrap gap-2">
        <input
          type="text"
          className="text-[12px] w-full bg-forgetpassbtn p-2 rounded-3xl text-text"
          placeholder={t("Time")}
          onChange={(e) => setFirstDate(e.target.value)}

        />
      </div>
    </div>
  );
};

export default Date;
