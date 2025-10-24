import { useTranslation } from "react-i18next";
import Button from "../../button/Buttons";

const HeaderButtons = () => {
  const { t } = useTranslation();
  return (
    <div className="rounded-3xl max-w-440px flex h-12 bg-black-900 text-center gap-2  text-white pt-0.5">
      <div className="flex gap-4 pt-2 pr-2 pl-2">
        <p className="cursor-pointer hover:text-blue">{t("Home")} </p>
        <p className="cursor-pointer hover:text-blue">{t("Courses")} </p>
        <p className="cursor-pointer hover:text-blue">{t("Blogs")} </p>
        <p className="cursor-pointer hover:text-blue">{t("AboutUs")} </p>
      </div>
      <Button />
    </div>
  );
};

export default HeaderButtons;
