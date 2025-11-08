import { useTranslation } from "react-i18next";
import Money from "../../../../core/icons/Money";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const Cost = ({ setFilter }) => {
  const [firstPrice, setFirstPrice] = useState();
  const [secondPrice, setSecondPrice] = useState();
  const { t } = useTranslation();
  const [value1] = useDebounce(firstPrice, 1000);
  const [value2] = useDebounce(secondPrice, 1000);
  useEffect(() => {
    if (value1 !== "") {
      setFilter((prev) => ({ ...prev, CostDown: value1 }));
    } else setFilter((prev) => ({ ...prev, CostDown: undefined }));
  }, [value1]);
  useEffect(() => {
    if (value2 !== "") {
      setFilter((prev) => ({ ...prev, CostUp: value2 }));
    } else setFilter((prev) => ({ ...prev, CostUp: undefined }));
  }, [value2]);
  return (
    <div className="w-11/12 flex flex-wrap m-auto gap-4">
      <div className="flex flex-nowrap w-full gap-2">
        <Money />
        <p className="text-text">{t("Cost")}</p>
      </div>

      <div className="flex items-center gap-2 w-full rounded-4xl">
        <p className="text-text text-[12px] ">{t("From")}</p>
        <input
          type="text"
          className="text-text text-[12px] w-1/3 bg-gray-0 text-center rounded-4xl"
          placeholder={t("Cost")}
          onChange={(e) => setFirstPrice(e.target.value)}
        />
        <p className="text-text text-[12px] ">{t("To")}</p>
        <input
          type="text"
          className="text-text text-[12px] w-1/3 bg-gray-0 text-center rounded-4xl"
          placeholder={t("Cost")}
          onChange={(e) => setSecondPrice(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Cost;
