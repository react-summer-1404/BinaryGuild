import React from "react";
import TableUserCourse from "../../Table/TableUserCourse";
import { useTranslation } from "react-i18next";


const UserDetailCourse = ({ usersDetails }) => {
    const { t } = useTranslation();
  
  return (
    <div className=" w-full h-[500px] ">
      {/* confirmed courses */}
      <div className=" h-full w-full">
        <h2 className="text-start p-4 pr-0 text-2xl font-bold"> {t("courseTableTitle")}</h2>

        {usersDetails?.courses.length > 0 ? (
          <TableUserCourse usersDetails={usersDetails} />
        ): (
            <p className=" mt-10 text-small">{t("noCourse")}</p>
        ) }
      </div>
    </div>
  );
};

export default UserDetailCourse;
