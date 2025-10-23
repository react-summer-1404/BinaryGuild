import "tailwindcss";
import Youtube from "../../../../core/icons/Youtube";
import Telegram from "../../../../core/icons/Telegram";
import Instagram from "../../../../core/icons/inestagram";
import Twitter from "../../../../core/icons/twitter";

const FooterIcon = () => {
  return (
    <div className="gap-4 flex flex-wrap mt-4">
      <Twitter className=" dark:bg-gray-400" />
      <Youtube className="" />
      <Telegram className="" />
      <Instagram className="" />
    </div>
  );
};

export default FooterIcon;
