import React from "react";
import { useTranslation } from "react-i18next";
import { GetCourses } from "../../../core/services/api/get-data";
import { useQuery } from "@tanstack/react-query";
import moment from "moment-jalaali";

const TableUserCourse = ({ usersDetails }) => {
  const { t } = useTranslation();
  const formatInsertDate = moment(usersDetails.lastUpdate).format(
    "jYYYY/jMM/jDD"
  );

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
    <div className="z-56 mt-3">
      <table className="min-w-full border border-gray-400  divide-y divide-gray-600">
        <thead className="bg-gray-800 p-5 h-10 text-small text-gray-300 ">
          <tr className="">
            <th className=" text-start pr-4  ">{t("nameOfCourse")}</th>
            <th className=" text-start">{t("courseDes")}</th>
            <th className=" text-start">{t("lastUpdate")}</th>
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
              <tr className="border border-gray-400 text-[14px] " key={c.courseId}>
                <td className="pr-4 h-12 text-start">{courseMatched.title}</td>
                <td className="text-start">{courseMatched.describe}</td>
                <td className="text-start">{formatInsertDate}</td>
                <td className="text-start">
                  <div className=" flex  items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9533 9.20425C18.2066 9.5595 18.3333 9.73716 18.3333 10.0001C18.3333 10.263 18.2066 10.4407 17.9533 10.7959C16.8149 12.3922 13.9076 15.8334 9.99996 15.8334C6.09228 15.8334 3.18504 12.3922 2.04666 10.7959C1.7933 10.4407 1.66663 10.263 1.66663 10.0001C1.66663 9.73716 1.7933 9.5595 2.04666 9.20425C3.18504 7.60795 6.09228 4.16675 9.99996 4.16675C13.9076 4.16675 16.8149 7.60795 17.9533 9.20425Z"
                        stroke="#707070"
                        stroke-width="1.5"
                      />
                      <path
                        d="M12.5 10C12.5 8.61925 11.3807 7.5 10 7.5C8.61925 7.5 7.5 8.61925 7.5 10C7.5 11.3807 8.61925 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10Z"
                        stroke="#707070"
                        stroke-width="1.5"
                      />
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
