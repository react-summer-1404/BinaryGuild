import React from "react";
import { useQuery } from "@tanstack/react-query";
import { GetNewsList } from "../../../core/services/api/adminPanel/get-data";
import { Spinner } from "@heroui/spinner";
import { useTranslation } from "react-i18next";
import BlogFilter from "./BlogFilter";

const BlogsManagement = () => {
  const { t } = useTranslation();

  const {
    data: newsData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => GetNewsList({ PageNumber: 1, RowsOfPage: 100, }),
  });

  const allNews = newsData?.news?.filter((n)=>n.active === true);
  console.log("allNews", allNews);

  if (isLoading)
    return (
      <Spinner
        classNames={{ label: "text-foreground mt-4" }}
        size="lg"
        variant="wave"
      />
    );
  if (isError) return <p>An Error accoured :( </p>;

  return (
    <div className=" w-full  flex gap-5 rounded-small mt-5 ">
      <div className=" rounded-xl h-full w-[25%] flex flex-col gap-5 ">
        <div className="w-full h-28 shadow-small shadow-amber-50 flex items-center justify-around bg-[#222] rounded-xl ">
          {" "}
          <div className="flex flex-col items-start p-3">
            <div className="font-bold text-2xl">{newsData?.totalCount}</div>
            <p className="mt-2">{t("totalNews")}</p>
          </div>
          <div className="border border-black w-13 h-13 rounded-[100%] ">
            img{" "}
          </div>
        </div>

        <div className="w-full h-28 shadow-small shadow-amber-50 flex items-center justify-around bg-[#222] rounded-xl ">
          {" "}
          <div className="flex flex-col items-start p-3">
            <div className="font-bold text-2xl">{(newsData?.news?.filter((n)=>n.active === true).length)}</div>
            <p className="mt-2">{t("activeNews")}</p>
          </div>
          <div className="border border-black w-13 h-13 rounded-[100%] ">
            img{" "}
          </div>
        </div>


        <div className="w-full h-28 shadow-small shadow-amber-50 flex items-center justify-around bg-[#222] rounded-xl ">
          {" "}
          <div className="flex flex-col items-start p-3">
            <div className="font-bold text-2xl">{(newsData?.news?.filter((n)=>n.active === false).length)}</div>
            <p className="mt-2">{t("deActiveNews")}</p>
          </div>
          <div className="border border-black w-13 h-13 rounded-[100%] ">
            img{" "}
          </div>
        </div>


      </div>

      <div className=" rounded-xl h-full w-[75%] ">
        <BlogFilter newsData={newsData} />
      </div>
    </div>
  );
};

export default BlogsManagement;
