import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetBlogsDetail } from "../../../../core/services/api/get-data";
import BlogsData from "./BlogsData";
import { useQuery } from "@tanstack/react-query";

const BlogDetail = () => {
  const { Id } = useParams();
  const [blogs, setBlogs] = useState(null);

  const { data: getBlogData } = useQuery({
    queryKey: ["GET-BLOGS-DATA"],
    queryFn: () => GetBlogsDetail(Id),
  });

  useEffect(() => {
    const blogData = async () => {
      try {
        const response = await GetBlogsDetail(Id);
        console.log("fffffkkkkkkkkkkkaaaaaaaa",response);
        setBlogs(response);
      } catch (error) {
        console.log(error, "error");
      }
    };
    if (Id) blogData();
  }, [Id]);

    if (!blogs) return <p>در حال بارگزاری</p>;

  return (
    <div className="w-[92%] m-auto  bg-background  flex flex-col text-text rtl:text-right mt-14 ">
      {Id ? (
        getBlogData?.map((value) => {
          return (
            <BlogsData
              describe={value.describe}
              title={value.title}
              currentImageAddressTumb={value.currentImageAddressTumb}
              insertDate={value.insertDate}
              addUserFullName={value.addUserFullName}
              newsLike={value._count.newsLike}
              newsDissLike={value._count.newsDissLike}
              newsView={value._count.newsView}
            />
          );
        })
      ) : (
        <p>در حال بارگزاری</p>
      )}
    </div>
  );
};

export default BlogDetail;
