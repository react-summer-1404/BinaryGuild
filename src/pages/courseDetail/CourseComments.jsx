import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@heroui/button";
import { useState, useEffect } from "react";
import { GetCourseComments } from "../../core/services/api/get-data";
import moment from "moment-jalaali";
import { AddCourseCommentLike } from "../../core/services/api/post-data";
import { AddCourseCommentDisLike } from "../../core/services/api/post-data";
import CourseCommentModal from "./CourseCommentModal";
import toast, { Toaster } from "react-hot-toast";

const CourseComments = ({ courseId, course }) => {
  const [comment, setComment] = useState([]);
  const [show, setShow] = useState(false);

  const { t } = useTranslation();

  const formatInsertDate = moment(courseId.insertDate).format("jYYYY/jMM/jDD");

  const handleLike = async (commentId) => {
    try {
      const response = await AddCourseCommentLike(commentId);
      console.log(response);
      toast.success(t("successCourseLike"));
    } catch (error) {
      console.log(error);
      toast.error(t("errorCourseLike"));
    }
  };

  const handleDisLike = async (commentId) => {
    try {
      const response = await AddCourseCommentDisLike(commentId);
      console.log(response);
      toast.success(t("successCourseLike"));
    } catch (error) {
      console.log(error);
      toast.error(t("errorCourseLike"));
    }
  };

  useEffect(() => {
    const comments = async () => {
      try {
        const response = await GetCourseComments(courseId);
        console.log(response, "comments response");
        setComment(response);
      } catch (error) {
        console.log(error);
      }
    };
    if (courseId) comments();
  }, [courseId]);



  return (
    <div className=" h-[400px] w-full mt-8 ">
      <Toaster />
      <h2 className="text-[#707070] flex justify-start font-[700] text-[20px] max-[500px]:w-20 ">
        {t("CommentsHead")}
      </h2>

      <div className=" w-full h-[282px] grid grid-cols-4 gap-4 mt-6 max-[768px]:block ">
        <div className=" h-full rounded-[24px] bg-[#3772FF] flex justify-center items-center gap-2">
          <div className="flex flex-col items-center justify-center">
            <img
              src="../../../src/assets/icons/comment-add-01.png"
              className="w-8 h-8"
            />
            <p className="text-[#FCFCFC] text-[18px] font-[600] mt-2 ">
              {t("Comments")}
            </p>
            <button
              onClick={() => setShow(true)}
              className="text-[#FCFCFC] cursor-pointer text-[14px] font-[500] mt-4"
            >
              {t("CommentDescription")}
            </button>
          </div>
        </div>

        {show && (
          <CourseCommentModal
            courseId={courseId}
            course={course}
            onClose={() => setShow(false)}
          />
        )}

        {comment.length > 0 ? (
          comment.map((course) => (
            <div
              key={course.id}
              className="bg-forgetpassbtn p-4 h-90 rounded-[24px] flex flex-col items-center justify-between mt-4 mb-4"
            >
              <div className=" h-[157px] w-full">
                <p className="text-text font-bold text-[18px]">
                  {course.title}
                </p>
                <p className="font-[500] text-4 text-[#707070] mt-4 wrap-break-word">
                  {course.describe}
                </p>
              </div>
              <div className="h-10 w-full flex justify-between">
                <div className="flex gap-3">
                  <div className="border border-black w-10 h-10 rounded-[400px] ">
                    <img src={course.pictureAddress} />
                  </div>
                  <div>
                    <p className="font-[600] text-text text-[14px] ">
                      {course.author}
                    </p>
                    <p className="text-[#707070] font-[500] text-[12px] ">
                      {formatInsertDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 max-[1256]:gap-0 max-[930px]:hidden max-[768px]:flex ">
                  <div className="flex gap-0.5">
                    <svg
                      className="cursor-pointer"
                      onClick={() => handleLike(course.id)}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="text-[16px] font-[500] max-[1000px]:hidden max-[768px]:block ">
                      {course.likeCount}
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <svg
                      className="cursor-pointer"
                      onClick={() => handleDisLike(course.id)}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11.5C2 12.6046 2.89543 13.5 4 13.5C5.65685 13.5 7 12.1569 7 10.5V6.5C7 4.84315 5.65685 3.5 4 3.5C2.89543 3.5 2 4.39543 2 5.5V11.5Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.4787 16.1937L15.2124 15.3337C14.9942 14.6289 14.8851 14.2765 14.969 13.9982C15.0369 13.7731 15.1859 13.579 15.389 13.4513C15.64 13.2935 16.0197 13.2935 16.7791 13.2935H17.1831C19.7532 13.2935 21.0382 13.2935 21.6452 12.5327C21.7145 12.4458 21.7762 12.3533 21.8296 12.2563C22.2965 11.4079 21.7657 10.2649 20.704 7.9789C19.7297 5.88111 19.2425 4.83222 18.338 4.21485C18.2505 4.15508 18.1605 4.0987 18.0683 4.04586C17.116 3.5 15.9362 3.5 13.5764 3.5H13.0646C10.2057 3.5 8.77628 3.5 7.88814 4.36053C7 5.22106 7 6.60607 7 9.37607V10.3497C7 11.8054 7 12.5332 7.25834 13.1994C7.51668 13.8656 8.01135 14.4134 9.00069 15.5089L13.0921 20.0394C13.1947 20.1531 13.246 20.2099 13.2913 20.2493C13.7135 20.6167 14.3652 20.5754 14.7344 20.1577C14.774 20.1129 14.8172 20.0501 14.9036 19.9245C15.0388 19.728 15.1064 19.6297 15.1654 19.5323C15.6928 18.6609 15.8524 17.6256 15.6108 16.6429C15.5838 16.5331 15.5488 16.4199 15.4787 16.1937Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="text-[16px] font-[500] max-[1000px]:hidden max-[768px]:block ">
                      {course.disslikeCount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className=" flex items-center max-[768px]:mt-10 justify-center ">
            {" "}
            {t("NoComment")}
          </div>
        )}
      </div>

      {comment.length > 3 ? (
        <div className="w-full h-[39px] flex justify-center items-center mt-5 max-[768px]:block  max-[768px]:mt-40  ">
          <Button className="bg-[#2F2F2F] mt-8 cursor-pointer w-[125px] h-[39px] p-2 rounded-[40px] flex justify-center items-center gap-2 ">
            <p className="text-[#FCFCFC] text-[16px] font-[500]">
              {t("SeeMore")}
            </p>
          </Button>
        </div>
      ) : (
        <p> </p>
      )}
    </div>
  );
};

export default CourseComments;
