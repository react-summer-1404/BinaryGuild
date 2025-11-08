import { useTranslation } from "react-i18next";
import { Button } from "@heroui/button";
import moment from "moment-jalaali";
import ReactStars from "react-stars";
import { useState } from "react";
import { AddReserveCourse } from "../../../src/core/services/api/post-data/index";
import { AddfavoriteCourse } from "../../../src/core/services/api/post-data/index";
import { AddCourseLike } from "../../../src/core/services/api/post-data/index";
import { AddCourseDisLike } from "../../../src/core/services/api/post-data/index";
import toast, { Toaster } from "react-hot-toast";
import ReserveCourseSuccessModal from "./ReserveCourseSuccessModal";

const CourseHeader = ({ course, courseId }) => {
  const { t } = useTranslation();
  const [reserve, setReserve] = useState("");
  const [favorite, setFavorite] = useState("");
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const [showReserveBox, setShowReserveBox] = useState(false);

  const handleShowReserveBox = () => {
    setShowReserveBox(true);
  };

  const formatStartTime = moment(course.startTime).format("jYYYY/jMM/jDD");
  const formatEndTime = moment(course.endTime).format("jYYYY/jMM/jDD");

  const handleLike = async () => {
    try {
      const response = await AddCourseLike(courseId);
      console.log(response, "response reserve");
      if (response.success) {
        setLike(true);
        setDisLike(false);
        toast.success(t("successCourseLike"));
      }
    } catch (error) {
      console.log(error, "error reserve");
      toast.error(t("errorCourseLike"));
            if (error.response.status === 401) {
        toast.error(t("errorCourseReserveUserNotLogin"));
      }
    }
  };

  const handDisleLike = async () => {
    try {
      const response = await AddCourseDisLike({ courseId: courseId });
      console.log(response, "response reserve");
      if (response.success) {
        setDisLike(true);
        setLike(false);
        toast.success(t("successCourseLike"));
      }
    } catch (error) {
      console.log(error, "error reserve");
      toast.error(t("errorCourseLike"));
            if (error.response.status === 401) {
        toast.error(t("errorCourseReserveUserNotLogin"));
      }
    }
  };

  const handleFavorite = async () => {
    try {
      const response = await AddfavoriteCourse({ courseId: courseId });
      console.log(response, "response reserve");
      setFavorite(response);
      toast.success(t("successCourseFavorite"));
    } catch (error) {
      console.log(error, "error reserve");
      toast.error(t("errorCourseFavorite"));
            if (error.response.status === 401) {
        toast.error(t("errorCourseReserveUserNotLogin"));
      }
    }
  };

  const handleReserve = async () => {
    console.log(handleReserve);
    try {
      const response = await AddReserveCourse({ courseId: courseId });
      console.log(response, "response reserve");
      setReserve(response);
      toast.success(t("successCourseReserve"));
    } catch (error) {
      if (error.response.status === 401) {
        const token= localStorage.getItem("token")
        if(!token) {
        toast.error(t("errorCourseReserveUserNotLogin"));

        }else{
        toast.error(t("completeProfile"));

        }
      }
    }
  };

  return (
    <div className="w-full m-auto h-106 flex gap-8 justify-between items-center max-[540px]:flex-col-reverse max-[540px]:mt-100">
      <Toaster />
      <div className=" w-[45%] h-106 max-[1000px]:hidden max-[540px]:block  max-[540px]:w-[100%]  max-[540px]:h-[424px] max-[540px]:mt-25  ">
        <img
          src={course.imageAddress}
          className="w-full h-full  rounded-[32px] max-[540px]:block  max-[540px]:w-[100%]  max-[540px]:h-[424px]"
        />
      </div>

      <div className="w-[55%] h-100 flex flex-col max-[1000px]:w-full">
        {/* headeline */}

        <h2 className="text-[32px] font-bold text-text ">
          {t("CourseName")} {course.title}{" "}
        </h2>

        {/* div1 */}

        <div className="w-[100%] border-2 rounded-[16px] border-gray-100 h-40 mt-5 gap-y-2 grid grid-cols-4 max-[540px]:grid-cols-2 max-[540px]:gap-y-0">
          <div className="border-l-2 border-[#DCDCDC] pb-5 max-[540px]:pb-2 max-[540px]:border-b-2">
            <p className="text-[#707070] text-[14px] font-[500] mt-2 mr-2 ">
              {t("CourseStatus")}
            </p>
            <div className="bg-[#FF5353] w-[101px] h-[27px] rounded-[32px] mr-2 mt-2 flex justify-center items-center ">
              {course.courseStatusName}
            </div>
          </div>
          <div className="border-l-2 border-[#DCDCDC] pb-5 max-[540px]:border-l-0 max-[540px]:pb-2 max-[540px]:border-b-2">
            <p className="text-[#707070] text-[14px] font-[500] mt-2 mr-2 ">
              {t("CourseType")}
            </p>
            <div className="bg-[#3772FF] w-[101px] h-[27px] rounded-[32px] mr-2 mt-2 flex justify-center items-center "></div>
          </div>
          <div className="border-l-2 border-[#DCDCDC] pb-5 max-[540px]:pb-2">
            <p className="text-[#707070] text-[14px] font-[500] mt-2 mr-2 ">
              {t("CourseLevel")}
            </p>
            <div className="bg-[#FF37F5] w-[101px] h-[27px] rounded-[32px] mr-2 mt-2 flex justify-center items-center ">
              {course.courseLevelName}
            </div>
          </div>
          <div>
            <p className="text-[#707070] text-[14px] font-[500] mt-2 mr-2 ">
              {t("CourseTeacher")}
            </p>
            <p className=" w-full h-[27px] rounded-[32px] mr-2 mt-2 ">
              {course.teacherName}
            </p>
          </div>
        </div>

        {/* div2 */}
        <div className="w-[100%] border-2 rounded-[16px] border-gray-100 h-40 mt-5 gap-y-2 grid grid-cols-4 max-[540px]:grid-cols-2 max-[540px]:gap-y-0 ">
          <div className="border-l-2 border-[#DCDCDC] pb-5 max-[540px]:pb-2 max-[540px]:border-b-2">
            <p className="text-[#707070] text-[14px] font-[500] mt-2 mr-2 ">
              {t("CourseStart")}
            </p>
            <p className=" w-[101px] h-[27px] rounded-[32px] mr-2 mt-2 ">
              {formatStartTime}
            </p>
          </div>
          <div className="border-l-2 border-[#DCDCDC] pb-5 max-[540px]:border-l-0  max-[540px]:pb-0 max-[540px]:border-b-2">
            <p className="text-[#707070] text-[14px] font-[500] mt-2 mr-2 ">
              {t("CourseEnd")}
            </p>
            <p className=" w-[101px] h-[27px] rounded-[32px] mr-2 mt-2 ">
              {formatEndTime}
            </p>
          </div>

          <div className="border-l-2 border-[#DCDCDC] pb-5 max-[540px]:pb-0">
            <p className="text-[#707070] text-[14px] font-[500] mt-2 mr-2">
              {t("CourseLike")}
            </p>
            <p className=" w-[101px] h-[27px] rounded-[32px] mr-2 mt-2 ">
              {course.likeCount} {t("People")}
            </p>
          </div>

          <div>
            <p className="text-[#707070] text-[14px] font-[500] mt-2 mr-2 ">
              {t("CourseDislike")}
            </p>
            <p className=" w-[101px] h-[27px] rounded-[32px] mr-2 mt-2 ">
              {course.dissLikeCount} {t("People")}
            </p>
          </div>
        </div>

        {/* rate and price */}
        <div className="w-full h-[34px]  mt-5 flex justify-between max-[540px]:mt-4">
          <div className="flex items-center gap-2 ">
            <div>({course.courseRate})</div>
            <ReactStars
              count={5}
              value={course.courseRate}
              size={28}
              color1="#D9D9D9"
              color2="#FCFF46"
              edit={false}
            />
          </div>

          <div className="max-[540px]:hidden">
            {course.cost} {t("Price")}
          </div>
        </div>

        {/* buttons */}
        <div className="w-full h-14 mt-6 flex justify-between items-center">
          <div
            onClick={handleShowReserveBox}
            closeReserveBox={() => setShowReserveBox}
          >
            {" "}
            <Button className="bg-[#3772FF] cursor-pointer w-[194px] h-14 rounded-[40px]  max-[750px]:w-[120px] max-[750px]:h-10 max-[540px]:hidden ">
              <div
                onClick={handleReserve}
                className="w-full flex justify-center items-center gap-2"
              >
                <img src="../../../src/assets/icons/archive-02.png" />
                {reserve.success ? (
                  <p className="text-[#FCFCFC] text-[20px] font-[700] mb-2 max-[750px]:text-[16px]">
                    {t("Reserved")}
                  </p>
                ) : (
                  <p className="text-[#FCFCFC] text-[20px] font-[700] mb-2 max-[750px]:text-[16px]">
                    {t("ReserveCourse")}
                  </p>
                )}
              </div>
            </Button>
          </div>

          {showReserveBox && <ReserveCourseSuccessModal />}

          <Button className="bg-[#2F2F2F] cursor-pointer pl-10 pr-10  h-14 rounded-full flex justify-center items-center gap-2 max-[750px]:w-[250px] max-[750px]:h-10 ">
            <div
              onClick={handleFavorite}
              className="w-full flex justify-center items-center gap-2"
            >
              <img src="../../../src/assets/icons/book-02.png" />
              {favorite ? (
                <p className="text-[#FCFCFC] text-[20px] font-[500] max-[750px]:text-[16px]">
                  {" "}
                  {t("Favorited")}{" "}
                </p>
              ) : (
                <p className="text-[#FCFCFC] text-[20px] font-[500] max-[750px]:text-[16px]">
                  {" "}
                  {t("AddToFavorite")}{" "}
                </p>
              )}
            </div>
          </Button>

          <div className="flex gap-3">
            <button
              onClick={handleLike}
              className={`w-14 h-14 cursor-pointer rounded-[56px] flex justify-center items-center max-[750px]:w-12 max-[750px]:h-12 ${
                like ? "bg-blue-500" : "bg-white-200"
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z"
                  stroke={like ? "#FCFCFC" : "#000"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z"
                  stroke={like ? "#FCFCFC" : "#000"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={handDisleLike}
              className={`w-14 h-14 cursor-pointer rounded-[56px] flex justify-center items-center max-[750px]:w-12 max-[750px]:h-12 ${
                disLike ? "bg-blue-500" : "bg-white-200"
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11.5C2 12.6046 2.89543 13.5 4 13.5C5.65685 13.5 7 12.1569 7 10.5V6.5C7 4.84315 5.65685 3.5 4 3.5C2.89543 3.5 2 4.39543 2 5.5V11.5Z"
                  stroke={disLike ? "#FCFCFC" : "#000"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.4787 16.1937L15.2124 15.3337C14.9942 14.6289 14.8851 14.2765 14.969 13.9982C15.0369 13.7731 15.1859 13.579 15.389 13.4513C15.64 13.2935 16.0197 13.2935 16.7791 13.2935H17.1831C19.7532 13.2935 21.0382 13.2935 21.6452 12.5327C21.7145 12.4458 21.7762 12.3533 21.8296 12.2563C22.2965 11.4079 21.7657 10.2649 20.704 7.9789C19.7297 5.88111 19.2425 4.83222 18.338 4.21485C18.2505 4.15508 18.1605 4.0987 18.0683 4.04586C17.116 3.5 15.9362 3.5 13.5764 3.5H13.0646C10.2057 3.5 8.77628 3.5 7.88814 4.36053C7 5.22106 7 6.60607 7 9.37607V10.3497C7 11.8054 7 12.5332 7.25834 13.1994C7.51668 13.8656 8.01135 14.4134 9.00069 15.5089L13.0921 20.0394C13.1947 20.1531 13.246 20.2099 13.2913 20.2493C13.7135 20.6167 14.3652 20.5754 14.7344 20.1577C14.774 20.1129 14.8172 20.0501 14.9036 19.9245C15.0388 19.728 15.1064 19.6297 15.1654 19.5323C15.6928 18.6609 15.8524 17.6256 15.6108 16.6429C15.5838 16.5331 15.5488 16.4199 15.4787 16.1937Z"
                  stroke={disLike ? "#FCFCFC" : "#000"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
