import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setRole, setStatus } from "../../../store/filterSlice";


const UserManageFilter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { role, status } = useSelector((state) => state.UserFilter);



  const roleOptions = ["admin", "teacher","student", t("allUsers")];
  const statusOptions = [t("active"), t("deActive")];

  return (
    <div className=" w-full border border-white bg-[#222] rounded-xl h-40">
      <h3 className=" w-full text-start p-3 pr-5">{t("filters")}</h3>

      <div className="  h-23 w-full flex  items-center justify-around ">
        {/* role filter */}
        <div className=" w-1/3  h-20 flex flex-col">
          <p className="cursor-pointer rounded-[5px] bg-black-900 p-2">
            {t("ChooseBasedOn")} {t("Roll")}
          </p>
          <select
            className="bg-black-600 mt-2 p-2 rounded-[5px] text-white cursor-pointer "
            value={role}
            onChange={(e) => dispatch(setRole(e.target.value))}
          >
            {roleOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* status filter */}
        <div className=" w-1/3  h-20 flex flex-col">
          <p className="rounded-[5px] bg-black-900 p-2">
            {t("ChooseBasedOn")} {t("situation")}
          </p>
          <select
            className="bg-black-600 mt-2 p-2 rounded-[5px] text-white cursor-pointer "
            value={status}
            onChange={(e) => dispatch(setStatus(e.target.value))}
          >
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserManageFilter;
