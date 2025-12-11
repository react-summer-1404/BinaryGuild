import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import ReserveOrder from "../../../components/common/data-order/ReserveOrder";
import ReserveTable from "../../../components/common/table/reserve-table/ReserveTable";
import { UserReserve } from "../../../core/services/api/get-data";
import Search2 from "../../../components/common/search-and-date/search/Search2"

const MyReserve = () => {
  const { t } = useTranslation();

  const { data: getUserReserve } = useQuery({
    queryKey: ["USER-RESERVE"],
    queryFn: UserReserve,
  });
  console.log(getUserReserve, "getUserReserve");

  
  return (
    <div className="w-11/12 m-auto flex flex-wrap gap-6">
      <div className="w-full flex justify-start">
        <p className="text-text font-bold text-2xl">{t("MenuText3")}</p>
      </div>
        <div className="flex flex-nowrap gap-4 w-5/6">
          <div className="w-1/3">
            <Search2 getUserReserve={getUserReserve?.courseName} />
          </div>
          <div className=" mt-6">
            <ReserveOrder getUserReserve={getUserReserve?.accept} />
          </div>
        </div>
      <ReserveTable />
    </div>
  );
};

export default MyReserve;
