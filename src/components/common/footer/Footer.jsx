import Logo from "../image/logo"
import FooterIcon from "./footerIcon/FooterIcon"
import FooterText from "./footerText/FooterText"

const Footer = () => {
  return (
    <div>
      <Logo className="w-<30>"/>
      <FooterText className="w-<40>"/>
      <FooterIcon className="w-<30>"/>
    </div>
  )
}

export default Footer
