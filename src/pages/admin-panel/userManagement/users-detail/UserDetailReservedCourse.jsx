import React from "react";
import TableReservedCourses from "../../Table/TableReservedCourses";
import { useTranslation } from "react-i18next";

const UserDetailReservedCourse = ({ usersDetails }) => {
      const { t } = useTranslation();
  
  return (
    <div className=" w-full h-[600px] overflow-y-scroll ">
      {/* confirmed courses */}
      <div className=" w-full">
        <h2 className="text-start p-4 pr-0 text-2xl font-bold">{t("reserveCourseTableTitle")}</h2>

        {usersDetails?.coursesReseves.length > 0 ? (
          <TableReservedCourses usersDetails={usersDetails} />
        ) : (
          <p className=" mt-10 text-small">{t("noReserveCourse")}</p>
        )}
      </div>
    </div>
  );
};

export default UserDetailReservedCourse;
