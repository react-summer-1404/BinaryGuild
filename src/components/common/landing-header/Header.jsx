import Logo from "../logo/logo";
import ResponsiveLogo from "../logo/ResponsiveLogo";
import HeaderButtons from "./header-buttons/HeaderButtons";
import HeaderIcons from "./header-icons/HeaderIcons";
import ResponsiveIcon from "./responsive-icon/ResponsiveIcon";

const Header = () => {
  return (
    <div className="flex h-auto w-full mt-2 flex-nowrap justify-between items-start">
      <ResponsiveLogo />
      <div className="hidden lg:block">
        <Logo />
      </div>
      <HeaderButtons />

      <HeaderIcons />

      <ResponsiveIcon />
    </div>
  );
};

export default Header;
