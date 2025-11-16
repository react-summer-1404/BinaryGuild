import React from "react";
import { useState } from "react";
import UserManagementHeader from "./UserManagementHeader";
import UserManageFilter from "./UserManageFilter";
import UsersInfo from "./UsersInfo";
import UsersDetail from "./users-detail/UsersDetail";

const UserManagement = () => {
  const [openDetailId, setOpenDetailId] = useState(false);

  return (
    <div className="flex flex-col relative gap-3 mt-2">
      <UserManagementHeader />
      <UserManageFilter />
      <UsersInfo openDetailId={openDetailId} setOpenDetailId={setOpenDetailId} />
      {openDetailId && <UsersDetail UserId={openDetailId} onCloseDetail={()=>{setOpenDetailId(false)}} />}
    </div>
  );
};

export default UserManagement;
