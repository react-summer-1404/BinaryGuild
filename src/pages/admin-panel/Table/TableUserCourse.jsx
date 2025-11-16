import React from "react";
import { useTranslation } from "react-i18next";
import { GetCourses } from "../../../core/services/api/get-data";
import { useQuery } from "@tanstack/react-query";
import moment from "moment-jalaali";

const TableUserCourse = ({ usersDetails }) => {
  const { t } = useTranslation();
      const formatInsertDate = moment(usersDetails.lastUpdate).format("jYYYY/jMM/jDD");
  

  const pageParams = {
    PageNumber: 1,
    RowsOfPage: 5,
    SortingCol: "Active",
    SortType: "desc",
  };

  const { data: course } = useQuery({
    queryKey: ["GET_COURSES_DATA", pageParams],
    queryFn: () => GetCourses({ params: pageParams }),
  });

  const fullCourse = usersDetails?.courses.map((c) =>
    course?.courseFilterDtos.find((item) => item.courseId === c.courseId)
  );
  console.log("full course", fullCourse);

  return (
    <div className="z-56">
      <table className="min-w-full  divide-y divide-gray-600">
        <thead className="bg-gray-800 p-5 h-10 text-small text-gray-300 ">
          <tr className="">
            <th className=" text-start pr-4  ">{t("nameOfCourse")}</th>
            <th className=" text-start">{t("des")}</th>
            <th className=" text-start">{t("updateDate")}</th>
            <th className=" text-start">{t("function")}</th>
          </tr>
        </thead>
        <tbody>
          {usersDetails?.courses.map((c) => {
            const courseMatched = course?.courseFilterDtos?.find(
              (item) => item.courseId === c.courseId
            );
            if (!courseMatched) return null;

            return (
              <tr className=" text-[14px] " key={c.courseId}>
                <td className="pr-4 h-12 text-start">{courseMatched.title}</td>
                <td className="text-start">{courseMatched.describe}</td>
                <td className="text-start">{formatInsertDate}</td>
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
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableUserCourse;
