import React from "react";
import { useTranslation } from "react-i18next";
import { usersList } from "../../../core/services/api/adminPanel/get-data";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@heroui/spinner";
const UserManagementHeader = () => {
  const { t } = useTranslation();


    const {data:users ,isLoading,isError}=useQuery({
      queryKey:["users"],
      queryFn:()=>usersList(1,100)
    })
  
    if(isLoading) return <Spinner classNames={{label: "text-foreground mt-4"}} size="lg"  variant="wave" /> 
    if(isError) return<p>An Error accoured :( </p> 

      
  const adminCount = users?.listUser?.filter((item)=>item.roles.includes("admin")).length;
  const allUsersCount = users?.listUser?.filter((item)=>item.gmail).length;
  const studentCount = users?.listUser?.filter((item)=>item.roles.includes("student")).length;
  const teacherCount = users?.listUser?.filter((item)=>item.roles.includes("teacher")).length;




  return (
    <div className=" w-full flex justify-between items-center gap-4">
      <div className=" shadow-small shadow-amber-50 bg-[#222] rounded-xl w-1/4 h-30 flex items-center justify-between p-4">
        <div className="flex flex-col items-start p-3">
          <div className="font-bold text-2xl">{allUsersCount}</div>
          <p className="mt-2">{t("Users")}</p>
        </div>
        <div className="border border-black w-13 h-13 rounded-[100%] "> img </div>
      </div>
      <div className=" shadow-small shadow-amber-50 bg-[#222] rounded-xl w-1/4 h-30 flex items-center justify-between p-4">
        <div className="flex flex-col items-start p-3">
          <div className="font-bold text-2xl">{adminCount}</div>
          <p className="mt-2">{t("Admins")} </p>
        </div>
        <div className="border border-black w-13 h-13 rounded-[100%] ">img</div>
      </div>
      <div className=" shadow-small shadow-amber-50 bg-[#222] rounded-xl w-1/4 h-30 flex items-center justify-between p-4">
        <div className="flex flex-col items-start p-3"> 
          <div className="font-bold text-2xl">{teacherCount}</div>
          <p className="mt-2">{t("Teachers")}</p>
        </div>
        <div className="border border-black w-13 h-13 rounded-[100%] ">img</div>
      </div>
      <div className=" shadow-small shadow-amber-50 bg-[#222] rounded-xl w-1/4 h-30 flex items-center justify-between p-4">
        <div className="flex flex-col items-start p-3">
          <div className="font-bold text-2xl">{studentCount}</div>
          <p className="mt-2">{t("Students")}</p>
        </div>
        <div className="border border-black w-13 h-13 rounded-[100%] ">img</div>
      </div>
    </div>
  );
};

export default UserManagementHeader;
