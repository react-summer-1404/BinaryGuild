import Logo from "../logo/logo"
import FooterIcon from "./footerIcon/FooterIcon"
import FooterText from "./footerText/FooterText"

const Footer = () => {
  return (
    <div className=" w-full flex flex-nowrap justify-between ">
      <Logo />
      <FooterText/>
      <FooterIcon/>
    </div>
  )
}

export default Footer
