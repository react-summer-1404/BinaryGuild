import moment from "moment-jalaali";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DisLike from "../../../../core/icons/DisLike";
import Like from "../../../../core/icons/Like";
import {
  UserBlogsComments,
  UserCoursesComments,
} from "../../../../core/services/api/get-data";
import { useQuery } from "@tanstack/react-query";

const YourComments = ({ profileData }) => {

  const { t } = useTranslation();
  const {data:courseComments}=useQuery({
    queryKey:["COURSES-COMMENTS"],
    queryFn:UserCoursesComments,
  })
  const {data:blogsComment}=useQuery({
    queryKey:["BLOGS-COMMENTS"],
    queryFn:UserBlogsComments,
  })

  const formatDate = moment(courseComments?.inserDate).format("jYYYY/jMM/jDD");
  const formatDate2 = moment(blogsComment?.inserDate).format("jYYYY/jMM/jDD");

  return (
    <div className="w-11/12 flex flex-wrap m-auto gap-2 mt-3 mb-0 bg-forgetpassbtn">
      <div className="w-full flex flex-wrap justify-between">
        <p className="font-bold text-start w-1/3">{t("YourComment")}</p>
        <Link to={"/"} className=" w-2/5">
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
      <div className="w-11/12 flex flex-wrap gap-6 mt-4 justify-between">
        {blogsComment?.length > 0 ? (
          blogsComment?.map((value) => (
            <div className="w-2/5 flex flex-wrap">
              <div className="w-3/4 flex flex-nowrap gap-2">
                <img
                  className=" w-2/5"
                  src={profileData?.userImage}
                  onError={(e) => {
                    e.target.src = "/src/assets/icons/Peppe – 07.svg";
                  }}
                />
                <div className=" w-3/4 flex flex-wrap gap-1 ">
                  <p className="text-start font-persian w-full h-[20px] mt-auto font-bold text-[14px] text-text ">
                    {value.userId}
                  </p>
                  <p className="text-start font-persian h-[18px] mb-auto w-full text-[12px] text-text ">
                    {formatDate}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap w-4/5">
                <p className="text-start w-full font-bold text-text mt-3 ">
                  {value.title}
                </p>
                <p className="text-start font-persian text-[14px] text-text ">
                  {value.describe}
                </p>
              </div>
              <div className="justify-start w-full font-bold flex flex-nowrap gap-4">
                <div className="w-2/5 flex gap-2 rounded-4xl mt-2 flex-wrap">
                  <Like />
                  <p className="m-auto font-persian mr-0">{value.likeCount}</p>
                </div>
                <div className="w-2/5 flex flex-wrap rounded-4xl mt-2 gap-2 ">
                  <DisLike />
                  <p className="m-auto font-persian mr-0">{value.dissLikeCount}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className=" flex items-center max-[540px]:mt-4 justify-center">
          </div>
        )}
        {courseComments?.length > 0 ? (
          courseComments?.map((value) => (
            <div className=" w-2/5 flex flex-wrap">
              <div className="w-3/4 flex flex-nowrap gap-2">
                <img
                  className=" w-2/5"
                  src={profileData?.userImage}
                  onError={(e) => {
                    e.target.src = "/src/assets/icons/Peppe – 07.svg";
                  }}
                />
                <div className=" w-3/4 flex flex-wrap gap-1 ">
                  <p className="text-start w-full h-[20px] mt-auto font-bold text-[14px] text-text ">
                    {value.author}
                  </p>
                  <p className="text-star font-persiant h-[18px] mb-auto w-full text-[12px] text-text ">
                    {formatDate2}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap w-full">
                <p className="text-start w-full font-bold text-text mt-3 ">
                  {value.title}
                </p>
                <p className="text-start font-persian text-[14px] text-text ">
                  {value.describe}
                </p>
              </div>
              <div className="justify-start w-full font-bold flex flex-nowrap gap-4">
                <div className="w-2/5 flex gap-2 rounded-4xl mt-2 flex-wrap">
                  <Like />
                  <p className="m-auto font-persian mr-0">{value.likeCount}</p>
                </div>
                <div className="w-2/5 flex flex-wrap rounded-4xl mt-2 gap-2 ">
                  <DisLike />
                  <p className="m-auto font-persian mr-0">{value.disslikeCount}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className=" flex items-center max-[540px]:mt-4 justify-center">
          </div>
        )}
      </div>
    </div>
  );
};

export default YourComments;
