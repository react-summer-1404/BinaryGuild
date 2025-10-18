import "tailwindcss";
import Youtube from "../../../../core/icons/Youtube";
import Telegram from "../../../../core/icons/Telegram";
import Instagram from "../../../../core/icons/inestagram";
import Twitter from "../../../../core/icons/twitter";

const FooterIcon = () => {
  return (
    <div className="gap-4 flex flex-wrap">
      <Twitter className="bg-gray-500" />
      <Youtube className="" />
      <Telegram className="" />
      <Instagram className="" />
    </div>
  );
};

export default FooterIcon;
