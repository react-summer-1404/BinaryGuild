import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BlogsOrder from "../../components/common/data-order/BlogsOrder";
import { GetBlogsData } from "../../core/services/api/get-data";
import BlogCategory from "./filter-section/BlogCategory";
import ImageFallBack from "../../components/common/image-fallback/ImageFallBack";
import fallBack from "../../assets/images/no-blogs.avif";
import { Spinner } from "@heroui/react";

const Blogs = () => {
  const [filter, setFilter] = useState({
    PageNumber: 1,
    RowsOfPage: 9,
    SortingCol: "Active",
    SortType: "desc",
  });
  const [loading, setLoading] = useState();
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
    <div className="flex flex-wrap gap-10 mb-20">
      <div className="w-full m-auto flex flex-wrap gap-6 mt-12 mb-12  ">
        <h2 className="text-text w-4/6 pl-24 m-auto text-[40px] font-bold">
          {t("TextBlogsHeader")}
        </h2>
        <p className="text-muted w-2/6 pr-9 pl-[140px] m-auto">
          {t("TextBlogs")}
        </p>
      </div>
      <div className="w-1/6 border-3 rounded-4xl h-[320px] border-gray-0">
        <BlogCategory setFilter={setFilter} />
      </div>
      <div className="flex w-4/5 m-auto flex-wrap gap-6">
        <div className="w-full h-10 items-start">
          <BlogsOrder setFilter={setFilter} />
        </div>
        {blogsData?.length > 0 ? (
          blogsData?.map((value) => {
            return (
              <Link
                to={`/blogs-page/${value.id}`}
                key={value.id}
                className="w-1/4"
              >
                <div
                  key={value.id}
                  className="flex flex-wrap col-[3] gap-4 w-full"
                >
                  <ImageFallBack
                    src={value.currentImageAddress}
                    fallBack={fallBack}
                    className="rounded-4xl w-full h-[180px]"
                  />
                  <div className="w-11/12 flex flex-wrap gap-1 m-auto">
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
          <div className="w-2/3 m-auto">
            {/* <h1 className="text-text font-bold ">{t("ErrorCourses")}</h1> */}
            <Spinner size="lg" color="primary" className="mt-10" />
            <p className="text-text font-persian text-2xl">{t("PleaseWait")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
