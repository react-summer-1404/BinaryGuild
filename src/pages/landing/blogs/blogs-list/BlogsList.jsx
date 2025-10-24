import SeeMore from "../../../../components/common/button/SeeMore";
import BlogsData from "../../../../core/constant/blogs-data/BlogsData";
import BlogsWrapper from "../Blogs";

const BlogsListWrapper = () => {
  return (
    <div className="flex flex-wrap gap-1.5">
      {/* {BlogsData.map((value) => {
        return (
          <BlogsWrapper
            key={value.id}
            id={value.id}
            description={value.description}
            name={value.name}
            date={value.date}
            view={value.view}
          />
        );
      })} */}
      <SeeMore />
    </div>
  );
};

export default BlogsListWrapper;
