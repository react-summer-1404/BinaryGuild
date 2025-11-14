import React from "react";
import { useTranslation } from "react-i18next";
import { Toaster, toast } from "react-hot-toast";
import { deleteUsers } from "../../../core/services/api/adminPanel/delete-data";

const UserAction = () => {
  const { t } = useTranslation();

  
  const handleDeleteUser = async (userId) => {
    try {
      const response = await deleteUsers(userId);
      console.log("delete user:", response);
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("فقط ادمین اصلی می تواند حذف کند");
      }
    }
  };

  return (
    <div className="shadow-amber-50 shadow-medium left-16 w-35 z-55 rounded-xl absolute h-20 bg-black-600">
        <Toaster/>
      <div className="flex items-center cursor-pointer gap-2 w-full h-1/2 justify-center hover:bg-blue hover:rounded-tl-xl hover:rounded-tr-xl ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffff"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
          <path d="M9 17h6" />
          <path d="M9 13h6" />
        </svg>
        <p>{t("details")}</p>
      </div>
      <div onClick={handleDeleteUser} className="flex items-center cursor-pointer gap-2 w-full h-1/2 justify-center hover:bg-blue hover:rounded-bl-xl hover:rounded-br-xl ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 7l16 0" />
          <path d="M10 11l0 6" />
          <path d="M14 11l0 6" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>

        <p>{t("delete")}</p>
      </div>
    </div>
  );
};

export default UserAction;
