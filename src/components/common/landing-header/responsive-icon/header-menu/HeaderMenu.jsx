import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Delete from "../../../button/Delete";
import FooterIcon from "../../../footer/footer-icon/FooterIcon";
import Logo from "../../../logo/logo";

const HeaderMenu = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-black-600 w-100 h-auto flex flex-wrap justify-start gap-30">
      <div className="flex justify-around w-full">
        <Logo />
        <div >
          <Delete />
        </div>
      </div>
      <div className="border-b-2 font-bold font-persian w-full justify-start text-[32px]">
        <Link to={"/"}>
          <p className="border-white border-b-2 w-full text-start p-4 pb-0">
            {t("Home")}
          </p>
        </Link>
        <Link to={"/courses-page"}>
          <p className="border-white border-b-2 w-full text-start p-4 pb-0">
            {t("Courses")}
          </p>
        </Link>
        <Link to={"/blogs-page"}>
          <p className="border-white border-b-2 w-full text-start p-4 pb-0">
            {t("Blogs")}
          </p>
        </Link>
        <Link to={"/about-us"}>
          <p className="border-white border-b-2 w-full text-start p-4 pb-0">
            {t("AboutUs")}
          </p>
        </Link>
        <Link to={"/contact-us"}>
          <p className="border-white border-b-2 w-full text-start p-4 pb-0">
            {t("ContactUs")}
          </p>
        </Link>
      </div>
      <div className="border-t-2 border-white p-4 w-11/12 flex justify-center mr-4">
        <FooterIcon />
      </div>
    </div>
  );
};

export default HeaderMenu;
