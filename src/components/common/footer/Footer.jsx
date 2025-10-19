import Logo from "../logo/logo";
import FooterIcon from "./footer-icon/FooterIcon";
import FooterText from "./footer-text/FooterText";

const Footer = () => {
  return (
    <div className=" w-full flex flex-nowrap justify-between ">
      <Logo />
      <FooterText />
      <FooterIcon />
    </div>
  );
};

export default Footer;
