import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Calender from "../../../../core/icons/Calender";
import { useDebounce } from "use-debounce";

const Date = ({ setFilter }) => {
  const [firstDate, setFirstDate] = useState();
  const [secondDate, setSecondDate] = useState();
  const { t } = useTranslation();
  const [value] = useDebounce(firstDate, 1000);
  useEffect(() => {
    console.log("value", typeof value, "query", typeof firstDate , "date" , typeof secondDate);
    if (value !== undefined) {
      setFilter((prev) => ({ ...prev, Query: value }));
    }
  }, [value]);
  return (
    <div className="w-11/12 flex flex-wrap m-auto gap-4">
      <div className="flex flex-nowrap w-full gap-2">
        <Calender />
        <p className="text-text">{t("Date")}</p>
      </div>
      <div className="flex flex-nowrap gap-2">
        <input
          type="text"
          className="w-1/3 text-[12px] text-text"
          placeholder={t("FirstTime")}
          onChange={(e) => setFirstDate(e.target.value)}

        />
        <p className="text-text">-</p>
        <input type="text" className="w-1/3 text-[12px] text-text"
          placeholder={t("SecondTime")}
          onChange={(e) => setSecondDate(e.target.value)} />
      </div>
    </div>
  );
};

export default Date;
