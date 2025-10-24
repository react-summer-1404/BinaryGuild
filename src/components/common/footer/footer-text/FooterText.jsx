import { useTranslation } from "react-i18next";

const FooterText = () => {
  const {t} = useTranslation()
  return (
    <div className="text-lg text-center flex gap-5 text-text h-7 mt-3">
      <p className="cursor-pointer hover:border-b-2 ">{t("Home")}</p>
      <p className="cursor-pointer hover:border-b-2 ">{t("Courses")}</p>
      <p className="cursor-pointer hover:border-b-2 ">{t("Blogs")}</p>
      <p className="cursor-pointer hover:border-b-2 ">{t("Professors")}</p>
      <p className="cursor-pointer hover:border-b-2 ">{t("AboutUs")}</p>
      <p className="cursor-pointer hover:border-b-2 ">{t("ContactUs")}</p>
      <p className="cursor-pointer hover:border-b-2 ">{t("Services")}</p>
    </div>
  );
};

export default FooterText;
