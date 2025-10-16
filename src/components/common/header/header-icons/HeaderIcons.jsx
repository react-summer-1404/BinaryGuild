import { Button } from "@heroui/button";
import ThemeModes from "../../them-moods/themeMode";

const HeaderIcons = () => {
  return (
    <div className="flex gap-3">
      <div className=" border-[#DCDCDC] relative cursor-pointer">
        <Button isIconOnly aria-label="notification" color="warning" variant="faded" >
          <img
            src="/src/assets/icons/notification-02.svg"
            className="absolute left-1.5 top-1.5"
          />
        </Button>
        <div className="absolute top-6.5 left-6">
          <img src="/src/assets/icons/Group 3.svg" />
        </div>
      </div>
      <ThemeModes />
    </div>
  );
};

export default HeaderIcons;
