import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Profile1 from "../../../../core/icons/Profile1";
import DisLike from "../../../../core/icons/DisLike";
import Like from "../../../../core/icons/Like";

const YourComments = ({ profileData }) => {
  const { t } = useTranslation();
  return (
    <div className="w-11/12 flex flex-wrap m-auto gap-2 mt-3 mb-0 bg-forgetpassbtn">
      <div className="w-full flex flex-wrap justify-between">
        <p className="font-bold text-start w-1/3">{t("YourComment")}</p>
        <Link to={"/"} className=" w-1/3">
          <p className="text-blue font-persian text-end w-full">
            {t("SeeOther")}
          </p>
        </Link>
        <div className="border-b-2 border-boarder h-4 w-full">
          <p className="text-muted text-center mb-2 w-36 m-auto bg-forgetpassbtn">
            {t("CourseAndBlog")}
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="w-3/4 flex flex-nowrap gap-2">
          <img
            className=" w-1/5"
            src="/src/assets/icons/Peppe – 07.svg"
          />
          <div className=" w-3/4 flex flex-wrap gap-1 ">
            <p className="text-start w-full h-[20px] mt-auto font-bold text-[14px] text-text ">
              {profileData?.author}
            </p>
            <p className="text-start h-[18px] mb-auto w-full text-[12px] text-text ">
              {profileData?.insertDate}
            </p>
          </div>
        </div>
        <p className="text-start w-full font-bold text-text mt-3 ">
          {profileData?.title}
        </p>
        <p className="text-start w-full text-[14px] text-text ">
          {profileData?.describe}
        </p>
        <div className="justify-start w-1/2 font-bold flex flex-nowrap gap-4">
          <div className="w-2/5 flex gap-2 rounded-4xl mt-2 flex-wrap">
            <Like/>
            <p className="m-auto mr-0">{profileData?.likeCount}</p>
          </div>
          <div className="w-2/5 flex flex-wrap rounded-4xl mt-2 gap-2 ">
            <DisLike/>
            <p className="m-auto mr-0">{profileData?.disslikeCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComments;
