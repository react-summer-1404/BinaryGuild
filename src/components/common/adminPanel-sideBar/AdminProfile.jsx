import { useQuery } from "@tanstack/react-query";
import { UserData } from "../../../core/services/api/get-data";
import adminImage from '../../../assets/images/admin.png'
import { useTranslation } from "react-i18next";

const AdminProfile = () => {

  const { t } = useTranslation();


  const { data: profileData } = useQuery({
    queryKey: ["GET_PROFILE_INFO"],
    queryFn: UserData,
  });
  console.log(profileData);

  return (
    <div className=" h-full flex items-center justify-center gap-2">
      <img
        src={profileData?.currentPictureAddress || adminImage}
        onError={(e) => {
          e.target.src =adminImage ;
        }}
        className="w-10 border border-white object-cover h-10 rounded-3xl"
      />
      <div className="  flex flex-col items-start ">
        <p className=" text-[12px] text-white font-bold ">
          {profileData?.fName}
        </p>
        <p className=" text-[12px] text-white ">{t("admin")}</p>
      </div>
    </div>
  );
};

export default AdminProfile;
