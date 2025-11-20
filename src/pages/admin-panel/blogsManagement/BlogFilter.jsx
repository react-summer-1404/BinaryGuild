import React from "react";
import fallBackImage from "../../../../src/assets/images/fallBackImg.png";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import moment from "moment-jalaali";
import { useMemo, useState } from "react";
import BlogDetails from "./BlogDetails";
import {
  setNewsNumber,
  setNewsStatus,
  setNewsSort,
  setQueryNews,
} from "../../../store/filterSlice";

const BlogFilter = ({ newsData }) => {
  const [activeUserId, setActiveUserId] = useState(false);
  const formatInsertDate = moment(newsData?.news?.insertDate).format(
    "jYYYY/jMM/jDD"
  );
  const handleOpen = (id) => {
    if (activeUserId === id) {
      setActiveUserId(!activeUserId);
    } else {
      setActiveUserId(id);
    }
  };
  console.log(activeUserId);

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { newsNumber, newsStatus, newsSort, QueryNews } = useSelector(
    (state) => state.UserFilter
  );
  const showOptions = [5, 10, 15];
  const statusOptions = [t("active"), t("deActive")];
  const sortOption = [t("mostPopular"), t("mostViewed")];

  const queryNews = (e) => {
    if (e.target.value !== "") {
      console.log("value", e.target.value);
      dispatch(setQueryNews(e.target.value));
    } else if (e.target.value === "") {
      dispatch(setQueryNews(""));
    }
  };

  const filterNews = useMemo(() => {
    if (!newsData?.news) return [];

    let filtered = newsData?.news?.filter((item) => {
      if (newsStatus === t("active")) {
        return item.active === true;
      }
      if (newsStatus === t("deActive")) {
        return item.active === false;
      }
      return true;
    });

    if (QueryNews?.trim() !== "") {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(QueryNews?.toLowerCase()) ||
          item.miniDescribe.toLowerCase().includes(QueryNews?.toLowerCase())
      );
    }

    if (newsSort === t("mostPopular")) {
      filtered = filtered.sort((a, b) => b._count.newsRate - a._count.newsRate);
    } else if (newsSort === t("mostViewed")) {
      filtered = filtered.sort((a, b) => b._count.newsView - a._count.newsView);
    }

    return filtered.slice(0, newsNumber);
  }, [newsData?.news, newsStatus, newsSort, newsNumber, QueryNews, t]);

  return (
    <>
      <div className="w-full h-14 flex items-center relative justify-between">
        <div className="flex items-center  h-1/2 gap-3 mr-3">
          <p>{t("show")}</p>
          <div>
            <select
              className="bg-[#222] mt-2 p-2 rounded-[5px] text-white cursor-pointer "
              value={newsNumber}
              onChange={(e) => dispatch(setNewsNumber(e.target.value))}
            >
              {showOptions.map((item) => (
                <option key={item} value={item}>
                  {item}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className=" items-center flex gap-3">
          <p>{t("sortBy")} :</p>
          <div className=" ">
            <select
              className="bg-[#222] mt-2 p-2 rounded-[5px] text-white cursor-pointer "
              value={newsStatus}
              onChange={(e) => dispatch(setNewsStatus(e.target.value))}
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className=" ">
            <select
              className="bg-[#222] mt-2 p-2 rounded-[5px] text-white cursor-pointer "
              value={newsSort}
              onChange={(e) => dispatch(setNewsSort(e.target.value))}
            >
              {sortOption.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="w-full h-14 flex items-center justify-between">
        <input
          className="bg-[#222] border border-boarder focus:outline-none shadow-small shadow-amber-50 indent-2 rounded-[5px] w-full h-11 placeholder:text-[12px] "
          value={QueryNews}
          onChange={(e) => queryNews(e)}
          type="text"
          placeholder={t("search")}
        />
      </div>

      <div className=" w-full h-full mt-5 grid gap-x-3 gap-y-5 grid-cols-3">
        {filterNews?.map((item) => (
          <div
            key={item.id}
            className="shadow-sm  shadow-black-600 rounded-sm pb-2 bg-[#222]"
          >
            <div className="  h-[60%] ">
              <img
                onClick={() => handleOpen(item.id)}
                className="w-full h-full cursor-pointer"
                src={item.currentImageAddress}
                onError={(e) => (e.target.src = fallBackImage)}
              />
            </div>
            {activeUserId === item.id && <BlogDetails newsData={newsData} onCloseNesDetail={()=>setActiveUserId(false)} />}

            <div className=" flex justify-start items-center gap-1 pr-2 w-full h-10">
              <Rating
                style={{ maxWidth: 120 }}
                value={item._count.newsRate}
                readOnly
              />
              <p>({item._count.newsComment}) </p>
            </div>
            <p className="text-start font-bold cursor-pointer pr-2">
              {item.title}
            </p>
            <p className="text-start w-full truncate text-small mt-2 pr-2">
              {item.miniDescribe}
            </p>

            <div className="flex justify-between w-full pb-1.5 pr-2 pl-2 h-12">
              <div className=" flex gap-1 justify-start items-end pb-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 1.66675V3.33341M5 1.66675V3.33341"
                    stroke="#999999

"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.99621 10.8333H10.0037M9.99621 14.1666H10.0037M13.3258 10.8333H13.3333M6.66663 10.8333H6.6741M6.66663 14.1666H6.6741"
                    stroke="#999999

"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.91663 6.66675H17.0833"
                    stroke="#999999

"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.08337 10.2027C2.08337 6.57162 2.08337 4.75607 3.12681 3.62803C4.17024 2.5 5.84962 2.5 9.20837 2.5H10.7917C14.1505 2.5 15.8299 2.5 16.8733 3.62803C17.9167 4.75607 17.9167 6.57162 17.9167 10.2027V10.6307C17.9167 14.2617 17.9167 16.0773 16.8733 17.2053C15.8299 18.3333 14.1505 18.3333 10.7917 18.3333H9.20837C5.84962 18.3333 4.17024 18.3333 3.12681 17.2053C2.08337 16.0773 2.08337 14.2617 2.08337 10.6307V10.2027Z"
                    stroke="#999999

"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.5 6.66675H17.5"
                    stroke="#999999

"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-sm text-[#999999] font-bold">
                  {formatInsertDate}
                </p>
              </div>
              <div className=" flex gap-1.5 justify-start items-end pb-1">
                <p className="text-sm text-[#999999] font-bold">
                  {" "}
                  {item._count.newsView}{" "}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"
                    stroke="#999999"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogFilter;
