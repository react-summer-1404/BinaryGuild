import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { GetBlogsData } from "../../core/services/api/get-data";
import BlogCategory from "./filter-section/BlogCategory";
import ReserveOrder from "../../components/common/reserve-order/ReserveOrder";

const Blogs = () => {
  const [filter, setFilter] = useState({
    PageNumber: 1,
    RowsOfPage: 9,
    SortingCol: "Active",
    SortType: "desc",
  });
  console.log(filter);
  const { t } = useTranslation();
  const { data: blogsData, refetch: refetchBlogsData } = useQuery({
    queryKey: ["GET_BLOGS_DATA"],
    queryFn: () => GetBlogsData({ params: filter }),
  });
  console.log(blogsData, blogsData?.length > 0);
  useEffect(() => {
    if (filter) {
      refetchBlogsData();
    }
  }, [filter]);

  return (
    <div className="flex flex-wrap gap-10 ">
      <div className="w-full m-auto flex flex-wrap gap-6 ">
        <h2 className="text-text w-4/6 pl-24 m-auto text-[40px] font-bold">{t("TextBlogsHeader")}</h2>
        <p className="text-muted w-2/6 pr-9 pl-[140px] m-auto">{t("TextBlogs")}</p>
      </div>
      <div className="w-1/6 border-3 rounded-4xl border-gray-0">
        <BlogCategory setFilter={setFilter} />
      </div>
      <div className="flex w-4/5 m-auto flex-wrap gap-6">
      <div className="w-full items-start">
        <ReserveOrder /></div>
        {blogsData?.length > 0 ? (
          blogsData?.map((value) => {
            return (
              <Link
                to={`/blogs-page/${value.id}`}
                key={value.id}
                className="w-1/4"
              >
                <div key={value.id} className="flex flex-wrap col-[3] w-full">
                  <img
                    src={value.currentImageAddress}
                    onError={(e) =>
                      (e.target.src = "/src/assets/images/script.png")
                    }
                    className="rounded-4xl"
                  />
                  <div className="w-11/12 m-auto">
                    <p className="w-full text-2xl font-bold text-text text-start">
                      {value.title}
                    </p>
                    <div className="w-full flex flex-nowrap justify-between">
                      <p
                        className="text-start text-muted text-[14px]"
                        onError={(e) => (e.target.p = "rahimy taha")}
                      >
                        {value.addUserFullName}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div>دوره ای وجود ندارد</div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
