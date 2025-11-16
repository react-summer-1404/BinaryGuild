import React from "react";
import TableUserCourse from "../../Table/TableUserCourse";

const UserDetailCourse = ({ usersDetails }) => {
  return (
    <div className="border border-white w-full h-[500px] ">
      {/* confirmed courses */}
      <div className="border border-white h-full w-full">
        <h2>confirmed courses</h2>

        {usersDetails?.courses.length > 0 ? (
          <TableUserCourse usersDetails={usersDetails} />
        ): (
            <p>no courses</p>
        ) }
      </div>
    </div>
  );
};

export default UserDetailCourse;
