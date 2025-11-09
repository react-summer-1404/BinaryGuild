import Logo from "../logo/logo";
import ResponsiveLogo from "../logo/ResponsiveLogo";
import FooterIcon from "./footer-icon/FooterIcon";
import FooterText from "./footer-text/FooterText";

const Footer = () => {
  return (
    <div className=" w-11/12 m-auto flex flex-wrap lg:flex-nowrap justify-between ">
      <Logo />
      <FooterText />
      <ResponsiveLogo/>
      <FooterIcon />
    </div>
  );
};

export default Footer;
