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
    <div className=" w-full m-auto bg-background flex flex-col items-center text-text rtl:text-right mt-14 max-[540px]:mt-40 ">
      <BlogHeader blogs={blogs} />
      <BlogDescription blogs={blogs} />
      <BlogComments blogs={blogs} />
      <RelatedBlogs />
    </div>
  );
};

export default BlogDetailPage;
