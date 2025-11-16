import React from "react";
import { useTranslation } from "react-i18next";

const NotAccAcceptedCommentsTable = ({ usersNotAcceptedComments }) => {
  const { t } = useTranslation();


  return (
    <div className="z-56">
      <table className="min-w-full  divide-y divide-gray-600">
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
            <tr key={comment.id} className=" text-[14px] ">
              <td className="pr-4 h-12 text-start">{comment?.commentTitle}</td>
              <td className="text-start">{comment?.describe}</td>
              <td className="text-start">
                {comment?.accept ? "confirmed" : "not confirmed"}
              </td>
              <td className="text-start">
                <div className=" flex justify-center items-center">
                  <svg
                    className="cursor-pointer"
                    // onClick={() => handleOpen(user.id)}
                    width="20px"
                    height="20px"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <defs>
                        {" "}
                        <style></style>{" "}
                      </defs>{" "}
                      <title />{" "}
                      <g id="dots">
                        {" "}
                        <circle class="cls-1" cx="16" cy="16" r="3" />{" "}
                        <circle class="cls-1" cx="16" cy="8" r="3" />{" "}
                        <circle class="cls-1" cx="16" cy="24" r="3" />{" "}
                        <path class="cls-2" d="M16,13v6a3,3,0,0,0,0-6Z" />{" "}
                        <path class="cls-2" d="M16,5v6a3,3,0,0,0,0-6Z" />{" "}
                        <path class="cls-2" d="M16,21v6a3,3,0,0,0,0-6Z" />{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  {/* {activeUserId === user.id && <UserAction openId={openDetailId} setOpenId={setOpenDetailId} user={user} />} */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotAccAcceptedCommentsTable;