import { Button } from "@heroui/button";
import ThemeModes from "../../them-moods/themeMode";
import Notification from "../../../../core/icons/Notification";
import LanguageSelector from "./language-selector/LanguageSelector";

const HeaderIcons = () => {
  return (
    <div className="flex gap-3">
      <div className=" border-boarder relative cursor-pointer">
        
        <Button
          isIconOnly
          aria-label="notification"
          variant="faded"
          className="bg-boarder border-boarder"
        >
          <Notification />
        </Button>
        <div className="absolute top-6.5 left-6">
          <img src="/src/assets/icons/Group 3.svg" />
        </div>
      </div>
      <ThemeModes />
      <LanguageSelector/>
    </div>
  );
};

export default HeaderIcons;
