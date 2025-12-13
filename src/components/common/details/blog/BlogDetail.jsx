import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  GetBlogs,
  GetBlogsDetail,
} from "../../../../core/services/api/get-data";
import BlogsData from "./BlogsData";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@heroui/react";
import { useTranslation } from "react-i18next";

const BlogDetail = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const blogData = async () => {
      try {
        const response = await GetBlogs(id);
        console.log(response);
        setBlogs(response);
      } catch (error) {
        console.log(error, "error");
      }
    };
    if (id) blogData();
  }, [id]);

  if (!blogs) return <p>در حال بارگزاری</p>;

  return (
    <div className="w-[92%] m-auto  bg-background  flex flex-col text-text rtl:text-right mt-14 ">
      <BlogsData
        newsId={id}
        title={blogs.detailsNewsDto.title}
        currentImageAddressTumb={blogs.detailsNewsDto.currentImageAddressTumb}
        insertDate={blogs.detailsNewsDto.insertDate}
        newsCatregoryName={blogs.detailsNewsDto.newsCatregoryName}
        addUserFullName={blogs.detailsNewsDto.addUserFullName}
        newsLike={blogs.detailsNewsDto._count.newsLike}
        newsDissLike={blogs.detailsNewsDto._count.newsDissLike}
        newsRate={blogs.detailsNewsDto._count.newsRate}
        newsComment={blogs.detailsNewsDto._count.newsComment}
        newsView={blogs.detailsNewsDto._count.newsView}
        count={blogs.detailsNewsDto.newsRate.count}
        avg={blogs.detailsNewsDto.newsRate.avg}
      />
      <BlogDescription describe={blogs.detailsNewsDto.describe} NewsId={id} />

      <BlogComments title={blogs.detailsNewsDto.title} NewsId={id} />
      <RelatedBlogs newsCatregoryId={blogs.detailsNewsDto.newsCatregoryId} />
    </div>
  );
};

export default BlogDetail;
