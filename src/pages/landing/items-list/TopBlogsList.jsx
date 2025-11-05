import SeeMore from "../../../components/common/button/SeeMore";
import { UseGetTopBlogs } from "../../../core/services/api/get-data/index";
import TopBlogs from "../landings-sections/Blogs";
import { useQuery } from "@tanstack/react-query";

const TopBlogsList = () => {
  // Queries
  const { data: blogsData } = useQuery({
    queryKey: ["GET_NEWS"],
    queryFn: UseGetTopBlogs,
  });
console.log(blogsData)
  return (
    <div>
      <div className="w-full flex flex-nowrap">
        {blogsData?.map((item) => {
          return <TopBlogs key={item.id} item={item} />;
        })}
      </div>
      <SeeMore />
    </div>
  );
};

export default TopBlogsList;
