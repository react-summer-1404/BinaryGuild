import { useQuery } from "@tanstack/react-query";
import { UserComments } from "../../../core/services/api/get-data";
import YourComments from "../dashboard/comment/YourComments";

const CommentsList = () => {
  const { data: commentsData } = useQuery({
    queryKey: ["GET_USER_COMMENTS"],
    queryFn: UserComments,
  });
  console.log(commentsData, "commentsData");
  return (
    <div>
      {commentsData?.map((item) => {
        return <YourComments key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CommentsList;
