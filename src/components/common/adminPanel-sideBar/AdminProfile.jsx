import { useQuery } from "@tanstack/react-query";
import { UserData } from "../../../core/services/api/get-data";

const AdminProfile = () => {
  const { data: profileData } = useQuery({
    queryKey: ["GET_PROFILE_INFO"],
    queryFn: UserData,
  });
  console.log(profileData);

  return (
    <div className=" h-full flex items-center justify-center gap-2">
      <img
        src={profileData?.currentPictureAddress}
        onError={(e) => {
          e.target.src = "/src/assets/icons/Peppe – 07.svg";
        }}
        className="w-10 border border-white h-10 rounded-3xl"
      />
      <div className="  flex flex-col items-start ">
        <p className=" text-[12px] text-white font-bold ">
          {profileData?.email}
        </p>
        <p className=" text-[12px] text-white ">ادمین</p>
      </div>
    </div>
  );
};

export default AdminProfile;
