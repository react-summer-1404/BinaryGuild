import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogHeader from "./BlogHeader";
import BlogDescription from "./BlogDescription";
import BlogComments from "./BlogComments";
import RelatedBlogs from "./RelatedBlogs";
import { GetBlogs } from "../../core/services/api/get-data";

const BlogDetailPage = () => {
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
    <div className="border w-full m-auto  border-black  bg-background  flex flex-col text-text rtl:text-right mt-14 ">
      <BlogHeader
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
      />
      <BlogDescription describe={blogs.detailsNewsDto.describe} NewsId={id} />

      <BlogComments NewsId={id} />
      <RelatedBlogs />
    </div>
  );
};

export default BlogDetailPage;
