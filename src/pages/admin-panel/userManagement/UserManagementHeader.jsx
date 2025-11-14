import React from "react";
import { useTranslation } from "react-i18next";
import { usersList } from "../../../core/services/api/adminPanel/get-data";
import { useQuery } from "@tanstack/react-query";
const UserManagementHeader = () => {
  const { t } = useTranslation();


    const {data:users ,isLoading,isError}=useQuery({
      queryKey:["users"],
      queryFn:()=>usersList(1,100)
    })
  
    if(isLoading) return <p>Loading... please wait</p> 
    if(isError) return<p>An Error accoured :( </p> 

      
  const adminCount = users?.listUser?.filter((item)=>item.roles.includes("admin")).length;
  const allUsersCount = users?.listUser?.filter((item)=>item.gmail).length;
  const studentCount = users?.listUser?.filter((item)=>item.roles.includes("student")).length;
  const teacherCount = users?.listUser?.filter((item)=>item.roles.includes("teacher")).length;




  return (
    <div className=" w-full flex justify-between items-center gap-4">
      <div className="border border-white bg-[#222] rounded-xl w-1/4 h-30 flex items-center justify-between p-4">
        <div className="flex flex-col items-start">
          <div>{allUsersCount}</div>
          <p className="mt-2">{t("Users")}</p>
        </div>
        <div className="border border-black w-13 h-13 rounded-[100%] "> img </div>
      </div>
      <div className="border border-white bg-[#222] rounded-xl w-1/4 h-30 flex items-center justify-between p-4">
        <div className="flex flex-col items-start">
          <div>{adminCount}</div>
          <p className="mt-2">{t("Admins")} </p>
        </div>
        <div className="border border-black w-13 h-13 rounded-[100%] ">img</div>
      </div>
      <div className="border border-white bg-[#222] rounded-xl w-1/4 h-30 flex items-center justify-between p-4">
        <div className="flex flex-col items-start"> 
          <div>{teacherCount}</div>
          <p className="mt-2">{t("Teachers")}</p>
        </div>
        <div className="border border-black w-13 h-13 rounded-[100%] ">img</div>
      </div>
      <div className="border border-white bg-[#222] rounded-xl w-1/4 h-30 flex items-center justify-between p-4">
        <div className="flex flex-col items-start">
          <div>{studentCount}</div>
          <p className="mt-2">{t("Students")}</p>
        </div>
        <div className="border border-black w-13 h-13 rounded-[100%] ">img</div>
      </div>
    </div>
  );
};

export default UserManagementHeader;
