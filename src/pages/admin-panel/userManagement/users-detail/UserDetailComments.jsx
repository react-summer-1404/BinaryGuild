import React from "react";
import { getAllCommentsAccepted } from "../../../../core/services/api/adminPanel/get-data";
import { useQuery } from "@tanstack/react-query";
import AcceptedCommentsTable from "../../Table/AcceptedCommentsTable";

const UserDetailComments = ({ usersDetails }) => {
  const {
    data: usersCommentsAccepted,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users-comments-accepted"],
    queryFn: () => getAllCommentsAccepted(1, 100),
  });

  console.log("usersCommentsAccepted:", usersCommentsAccepted);

  const usersComments = usersCommentsAccepted?.comments?.filter(
    (comment) => comment.userId === usersDetails?.id
  );
  console.log("usersComments:", usersComments);

  if (isLoading) return <p>Loading... please wait</p>;
  if (isError) return <p>An Error accoured :( </p>;

  return (
  <div>
    <div>
      <h2>accepted comments</h2>
     {usersComments?.length > 0 && <AcceptedCommentsTable  usersComments={usersComments} /> } 

    </div>




  </div>)
};

export default UserDetailComments;
