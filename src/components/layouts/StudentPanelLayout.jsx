import { Outlet } from "react-router-dom";
import HeaderIcons from "../common/landing-header/header-icons/HeaderIcons";
import Logo from "../common/logo/logo";
import PanelList from "../common/panel-header/lists/panel-menu-list/PanelList";
import UserPanelList from "../common/panel-header/lists/user-panel-list/UserPanelList";
import PanelHeaderButton from "../common/panel-header/panel-button/PanelHeaderButton";
import SignOut from "../common/panel-header/sign-out/SignOut";
import { useQuery } from "@tanstack/react-query";
import { UserData } from "../../core/services/api/get-data";

const StudentPanelLayout = () => {
  const { data: profileData } = useQuery({
    queryKey: ["GET_PROFILE_INFO"],
    queryFn: UserData,
  });
  return (
    <div className="flex bg-black-900 flex-wrap">
      <div className="w-full flex flex-wrap">
        <div className="p-4">
          <Logo />
        </div>
        <UserPanelList profileData={profileData}/>
        <PanelHeaderButton />
        <div className="p-4">
          <HeaderIcons />
        </div>
      </div>
      <div className="w-1/7 flex flex-wrap">
        <PanelList />
        <SignOut />
      </div>
      <div className="bg-background text-text rounded-3xl w-5/7 mr-auto ml-auto mb-7">
        <Outlet />
      </div>
    </div>
  );
};

export default StudentPanelLayout;
