import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { GetBlogsData } from "../../core/services/api/get-data";
import BlogCategory from "./filter-section/BlogCategory";

const Blogs = () => {
  const [filter, setFilter] = useState({
    PageNumber: 1,
    RowsOfPage: 5,
    SortingCol: "Active",
    SortType: "desc",
  });
  console.log(filter);
  const { t } = useTranslation();
  const { data: blogsData, refetch: refetchBlogsData } = useQuery({
    queryKey: ["GET_BLOGS_DATA"],
    queryFn: () => GetBlogsData({ params: filter }),
  });
console.log(blogsData,blogsData?.length>0)
  useEffect(() => {
    if (filter) {
      refetchBlogsData();
    }
  }, [filter]);

  return (
    <>
      <BlogCategory setFilter={setFilter} />
      <div className="flex w-4/5 m-auto flex-wrap gap-6">
        {blogsData?.length>0? blogsData?.map((value) => {
          return (
            <Link to={`/blogs-page/${value.id}`} key={value.id} className="w-1/4">
              <div key={value.id} className="flex flex-wrap col-[3] w-full">
                <img src={value.imageAddress} className="rounded-4xl" />
                <div className="w-11/12 m-auto">
                  <p className="w-full text-2xl font-bold text-text text-start">
                    {value.title}
                  </p>
                  <div className="w-full flex flex-nowrap justify-between">
                    <p className="text-start text-muted text-[14px] ">
                      {value.teacherName}
                    </p>
                    <span className="text-end text-text ">
                      {value.cost} {t("Toman")}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        }):<div>دوره ای وجود ندارد</div>}
      </div>
    </>
  );
};

export default Blogs;
