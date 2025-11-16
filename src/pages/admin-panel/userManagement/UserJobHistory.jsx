import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setJobNumber, setQueryJob } from "../../../store/filterSlice";
import JobTable from "../Table/JobTable";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";

const UserJobHistory = () => {
  const { t } = useTranslation();
    const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const { jobNumber, QueryJob } = useSelector((state) => state.UserFilter);
  const showOptions = [5, 20, 30, 50];


  const queryJob = (e) => {
    if (e.target.value !== "") {
      console.log("value", e.target.value);
      dispatch(setQueryJob(e.target.value));
    } else {
      dispatch(setQueryJob(undefined));
    }
  };
 const totalPage= 10;
      function handlePageChange(page) {
    setCurrentPage(page);
    // ... do something with `page`
  }

  return (
    <div className="border border-white w-full h-9/10 bg-[#222] rounded-small ">
      <div className="border border-white w-full h-[15%] flex justify-between">
        <div className="flex items-center gap-3">
          <p>{t("show")}</p>
          <div>
            <select
              className="bg-black-600 mt-2 p-2 rounded-[5px] text-white cursor-pointer "
              value={jobNumber}
              onChange={(e) => dispatch(setJobNumber(e.target.value))}
            >
              {showOptions.map((item) => (
                <option key={item} value={item}>
                  {item}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <div className="  flex gap-3 items-center ml-5 h-full">
            <input
              className=" border border-boarder focus:outline-none indent-2 rounded-[5px] w-75 h-10 placeholder:text-[12px] "
              value={QueryJob}
              onChange={(e) => queryJob(e)}
              type="text"
              placeholder={t("search")}
            />
          </div>
        </div>
      </div>

      <div className="border border-white w-full h-[85%] ">
        <JobTable />
      </div>
      <div className="mt-5">
        <ResponsivePagination
          current={currentPage}
          total={totalPage}
          onPageChange={(page) => handlePageChange(page)}
        />
      </div>
    </div>
  );
};

export default UserJobHistory;
