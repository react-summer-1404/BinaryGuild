import Logo from "../logo/logo";
import HeaderButtons from "./header-buttons/HeaderButtons";
import HeaderIcons from "./header-icons/HeaderIcons";

const Header = () => {
  return (
    <div className="flex h-auto w-full flex-nowrap justify-between items-start">
      <Logo className="w-<fraction> 35" />
      <HeaderButtons className="w-<28>" />
      <HeaderIcons className="w-<30>" />
    </div>
  );
};

export default Header;
