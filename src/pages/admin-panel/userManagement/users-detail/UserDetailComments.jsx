import React from "react";
import { GetAllComments } from "../../../../core/services/api/adminPanel/get-data";
import { useQuery } from "@tanstack/react-query";
import AcceptedCommentsTable from "../../Table/AcceptedCommentsTable";
import NotAccAcceptedCommentsTable from "../../Table/NotAcceptedCommentTable";
import { useTranslation } from "react-i18next";
import "react-responsive-pagination/themes/classic-light-dark.css";
import { Spinner } from "@heroui/spinner";

const UserDetailComments = ({ usersDetails }) => {
  const { t } = useTranslation();

  const {
    data: usersCommentsAccepted,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users-comments-accepted"],
    queryFn: () => GetAllComments(1, 100),
  });

  // accepted comments
  const usersAcceptComments = usersCommentsAccepted?.comments
    ?.filter((comment) => comment.userId === usersDetails?.id)
    .filter((c) => c.accept == true);
  console.log("usersComments:", usersAcceptComments);

  //not accepted comments
  const usersNotAcceptedComments = usersCommentsAccepted?.comments
    ?.filter((comment) => comment.userId === usersDetails?.id)
    .filter((c) => c.accept == false);
  console.log("usersComments:", usersNotAcceptedComments);

  if (isLoading)
    return (
      <Spinner
        classNames={{ label: "text-foreground mt-4" }}
        size="lg"
        variant="wave"
      />
    );
  if (isError) return <p>An Error accoured :( </p>;

  return (
    <div className=" flex flex-col ">
      <div className=" w-full  overflow-y-scroll ">
        <h2 className="text-start p-4 pr-0 text-2xl font-bold">
          {t("acceptedComments")}
        </h2>
        {usersAcceptComments?.length > 0 ? (
          <AcceptedCommentsTable usersAcceptComments={usersAcceptComments} />
        ) : (
          <p className=" mt-10 text-small">{t("noAcceptedComments")}</p>
        )}
      </div>

      <div className=" w-full  overflow-y-scroll ">
        <h2 className="text-start p-4 pr-0 text-2xl font-bold">
          {t("notAcceptedComments")}
        </h2>
        {usersNotAcceptedComments?.length > 0 ? (
          <NotAccAcceptedCommentsTable
            usersNotAcceptedComments={usersNotAcceptedComments}
          />
        ) : (
          <p className=" mt-10 text-small">{t("noNotAcceptedComments")}</p>
        )}
      </div>
    </div>
  );
};

export default UserDetailComments;
