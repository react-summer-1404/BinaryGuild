import React from "react";
import TableReservedCourses from "../../Table/TableReservedCourses";
const UserDetailReservedCourse = ({ usersDetails }) => {
  return (
    <div className="border border-white w-full h-[600px] overflow-y-scroll ">
      {/* confirmed courses */}
      <div className="border border-white w-full">
        <h2>reserved courses</h2>

        {usersDetails?.coursesReseves.length > 0 ? (
          <TableReservedCourses usersDetails={usersDetails} />
        ) : (
          <p>no reserved courses</p>
        )}
      </div>
    </div>
  );
};

export default UserDetailReservedCourse;
