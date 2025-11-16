import React from "react";
import { getAllCommentsAccepted } from "../../../../core/services/api/adminPanel/get-data";
import { useQuery } from "@tanstack/react-query";
import AcceptedCommentsTable from "../../Table/AcceptedCommentsTable";
import NotAccAcceptedCommentsTable from "../../Table/NotAcceptedCommentTable";

const UserDetailComments = ({ usersDetails }) => {
  const {
    data: usersCommentsAccepted,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users-comments-accepted"],
    queryFn: () => getAllCommentsAccepted(1, 100),
  });

  // accepted comments
  const usersAcceptComments = usersCommentsAccepted?.comments
    ?.filter((comment) => comment.userId === usersDetails?.id)
    .filter((c) => c.accept == true);
  console.log("usersComments:", usersAcceptComments);

  //not accepted comments
  const usersNotAcceptedComments = usersCommentsAccepted?.comments?.filter((comment) => comment.userId === usersDetails?.id).filter((c)=>c.accept == false);
  console.log("usersComments:", usersNotAcceptedComments);

  if (isLoading) return <p>Loading... please wait</p>;
  if (isError) return <p>An Error accoured :( </p>;

  return (
    <div className=" border border-white h-full flex flex-col items-stretch gap-20 justify-between">
      <div>
        <h2>accepted comments</h2>
        {usersAcceptComments?.length > 0 && (
          <AcceptedCommentsTable usersAcceptComments={usersAcceptComments} />
        )}
      </div>

      <div>
        <h2> not accepted comments</h2>
        {usersNotAcceptedComments?.length > 0 && (
          <NotAccAcceptedCommentsTable usersNotAcceptedComments={usersNotAcceptedComments} />
        )}
      </div>
      
    </div>
  );
};

export default UserDetailComments;
