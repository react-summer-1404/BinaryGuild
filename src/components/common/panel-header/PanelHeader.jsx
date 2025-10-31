import React from "react";
import Logo from "../logo/logo";
import HeaderIcons from "../landing-header/header-icons/HeaderIcons";
import PanelList from "./lists/panel-menu-list/PanelList";
import UserPanelList from "./lists/user-panel-list/UserPanelList";
import PanelHeaderButton from "./panel-button/PanelHeaderButton";
import SignOut from "./sign-out/SignOut";

const PanelHeader = () => {
  return (
    <div className="flex bg-black-900 flex-wrap">
      <div className="w-full flex flex-wrap">
        <div className="p-4">
          <Logo />
        </div>
        <UserPanelList />
        <PanelHeaderButton />
        <div className="p-4">
          <HeaderIcons />
        </div>
      </div>
      <div className="w-1/7">
        <PanelList />
        <SignOut/>
      </div>
    </div>
  );
};

export default PanelHeader;
