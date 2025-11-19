import React from "react";
import { useTranslation } from "react-i18next";
import ResponsivePagination from "react-responsive-pagination";


const NotAccAcceptedCommentsTable = ({ usersNotAcceptedComments }) => {
  const { t } = useTranslation();

  return (
    <div className="z-56 mt-3">
      <table className="min-w-full border border-gray-400   divide-y divide-gray-600">
        <thead className="bg-gray-800 p-5 h-10 text-small text-gray-300 ">
          <tr className="">
            <th className=" text-start pr-4  ">{t("commentName")}</th>
            <th className=" text-start">{t("commentText")}</th>
            <th className=" text-start">{t("status")}</th>
            <th className=" text-start">{t("function")}</th>
          </tr>
        </thead>
        <tbody>
          {usersNotAcceptedComments?.map((comment) => (
            <tr
              key={comment.id}
              className="  border border-gray-400  text-[14px] "
            >
              <td className="pr-4 h-12 text-start">{comment?.commentTitle}</td>
              <td className="text-start">{comment?.describe}</td>
              <td className="text-start">
                {comment?.accept ? t("accepted") : t("notAccepted")}
              </td>
              <td className="text-start">
                <div className=" flex gap-2 items-center">
                  <div className="border border-gray-400 w-4 h-4 rounded-full"></div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M4 7l16 0" />
                    <path d="M10 11l0 6" />
                    <path d="M14 11l0 6" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>

                  {/* {activeUserId === user.id && <UserAction openId={openDetailId} setOpenId={setOpenDetailId} user={user} />} */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
            <div className="mt-5">
        <ResponsivePagination
          current={""}
          total={usersNotAcceptedComments?.length}
          // onPageChange={(page) => handlePageChange(page)}
        />
      </div>
    </div>
  );
};

export default NotAccAcceptedCommentsTable;
