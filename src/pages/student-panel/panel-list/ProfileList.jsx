import { useQuery } from "@tanstack/react-query";
import { UserData } from "../../../core/services/api/get-data";
import UserProfile from "../profile/UserProfile";
import Dashboard from "../dashboard/Dashboard";

const ProfileList = () => {
  const {data:profileData } = useQuery({ queryKey: ['GET_PROFILE_INFO'], queryFn: UserData })
  console.log(profileData)

  return (
    <div>
      {/* {profileData.map((item) => {
        return <Dashboard key={item.key} {...item}/>
        // return item
      })} */}
    </div>
  );
};

export default ProfileList;
 