import React from "react";
import { useState } from "react";
import moment from "moment-jalaali";
import { useTranslation } from "react-i18next";
import AddComment from "../../components/common/comment/AddComment";
import { useEffect } from "react";
import { GetBlogsComments } from "../../core/services/api/get-data";
import { AddCommentBlogs } from "../../core/services/api/post-data";
import { GetBlogsCommentsReply } from "../../core/services/api/get-data";
import { AddReplyCommentBlogs } from "../../core/services/api/post-data";
import toast, { Toaster } from "react-hot-toast";

const BlogCommentsModal = ({ onCloseBlogMOdal, title, NewsId, commentId }) => {
  const { t } = useTranslation();

  const formatInsertDate = moment(NewsId.insertDate).format("jYYYY/jMM/jDD");
  const [showReplyDesktopMode, setShowReplyDesktopMode] = useState(false);
  const [addcommentTitle, setAddCommentTitle] = useState("");
  const [addcommentDes, setAddCommentDes] = useState("");
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentsReply, setCommentsReply] = useState([]);
  // const [addCommentReplyTitle, setAddCommentReplyTitle] = useState("");
  // const [addCommentReplyDes, setAddCommentReplyDes] = useState("");
  const [selectedComment, setSelectedComment] = useState(null);

  //   replies

  const handleReplyComment = (commentId) => {
    setSelectedComment(selectedComment === commentId ? null : commentId);
  };

  // add comment
  const handleAddComment = () => {
    setShowCommentBox(!showCommentBox);
    setAddCommentTitle("");
    setAddCommentDes("");
  };

  const handleAddCommentDeskTopMode = () => {
    setShowReplyDesktopMode(!showReplyDesktopMode);
    setAddCommentTitle("");
    setAddCommentDes("");
  };

  //get comments
  useEffect(() => {
    const fetchBlogsComments = async () => {
      try {
        const response = await GetBlogsComments(NewsId);
        console.log(response);
        setComments(response);
      } catch (error) {
        console.log(error);
      }
    };
    if (NewsId) fetchBlogsComments();
  }, [NewsId]);

  //add comments

  const addComments = async () => {
    try {
      const response = await AddCommentBlogs({
        newsId: NewsId,
        userIpAddress: "",
        title: addcommentTitle,
        describe: addcommentDes,
        userId: "",
      });
      console.log(response);
      toast.success(t("AddCommentSuccessfullyBlog"));

      const updatedComments = await GetBlogsComments(NewsId);
      setComments(updatedComments);
      setShowCommentBox(false);
    } catch (error) {
      console.log(error);
      toast.error(t("AddCommentError"));
    }
  };

  //get comments reply

    useEffect(() => {
    const fetchBlogsCommentsReply = async () => {
      console.log(commentId)
      try {
        const response = await GetBlogsCommentsReply(commentId);
        console.log(response);
        setCommentsReply(response);
      } catch (error) {
        console.log(error);
      }
    };
    if (commentId) fetchBlogsCommentsReply();
  }, [commentId]);





  //add reply comments

  return (
    <div className="border text-right overflow-y-scroll   scrollbar-hide  text-text shadow-shadow shadow-xs border-boarder p-4 fixed inset-0 z-50 m-auto  w-200 h-[653px] rounded-[32px] bg-authcommonbackground max-[1245px]:w-160 max-[1245px]:h-120 max-[700px]:w-120 max-[500px]:w-95 ">
      <div className="flex justify-between">
        <div className=" w-full flex">
          <h2 className="text-text2 font-[700] text-[20px] ">
            {t("CommentsHead")}{" "}
          </h2>{" "}
          <p className="text-commentHead max-[500px]:w-30">
            {" "}
            ( {t("CourseName")} {title} )
          </p>
        </div>

        <button
          onClick={onCloseBlogMOdal}
          className="cursor-pointer w-25 h-10 border border-[#FF5353] rounded-[34px] flex items-center justify-center "
        >
          <img src="../../../src/assets/icons/cancel-01.png" />
          <span className="font-[500] text-[18px] text-[#FF5353]  ">
            {t("close")}{" "}
          </span>
        </button>
      </div>
      <div
        onClick={handleAddCommentDeskTopMode}
        className="w-[107px] h-10 cursor-pointer bg-blue rounded-[40px] mt-10 flex justify-center items-center gap-2 max-[768px]:hidden "
      >
        <img
          className="w-6 h-6"
          src="../../../src/assets/icons/comment-add-01.png"
        />
        <p className="text-[#FCFCFC] text-4 font-[500] ">{t("Comments")}</p>
      </div>
      {showReplyDesktopMode && (
        <AddComment
          onSend={addComments}
          describe={addcommentDes}
          setDescribe={setAddCommentDes}
          title={addcommentTitle}
          setTitle={setAddCommentTitle}
        />
      )}

      {/* comments */}

      {comments.length > 0 ? (
        <div className="h-auto overflow-y-scroll scrollbar-hide  mt-6 pr-2">
          {comments.map((item) => (
            <div key={item.id} className=" w-full h-auto mt-6 mb-6 p-2">
              {/* name and date */}
              <div className="flex gap-2">
                <div className=" w-10 h-10 rounded-[400px] ">
                  <img
                    src={item.title}
                    onError={(e) => {
                      e.target.src = "../../../src/assets/icons/Flynn.png";
                    }}
                  />
                </div>
                <div className="flex items-center">
                  {/* <p className="font-[600] text-text text-[14px] ">
                    {"author name"}
                  </p> */}
                  <p className="text-[#707070] font-[500] text-[12px] mt-2 ">
                    {formatInsertDate}
                  </p>
                </div>
              </div>
              {/* title */}
              <p className="text-text font-bold text-[18px] mt-3">
                {item.title}
              </p>
              {/* describe */}
              <p className="font-[500] text-4 text-[#707070] mt-4 wrap-break-word">
                {item.describe}
                {/* reply and like and dislike */}
              </p>
              <div className="flex items-center mt-4 gap-4 max-[1256]:gap-0 max-[1256]:flex-col ">
                <div className="flex gap-2 ">
                  <svg
                    className="cursor-pointer"
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

                  <span className="text-[16px] font-[500]">
                    {item.likeCount}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    className="cursor-pointer"
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
                  <span className="text-[16px] font-[500] ">
                    {item.disslikeCount}
                  </span>
                </div>

                <div
                  onClick={() => handleReplyComment(item.id)}
                  className=" cursor-pointer border flex items-center justify-center w-25 h-10 border-blue text-blue text-4 font-medium rounded-[40px] "
                >
                  {t("reply")}
                </div>
              </div>

              {/* comment reply */}

              <div className="h-auto overflow-y-scroll scrollbar-hide  mt-6 pr-2">
                {commentsReply.map((reply) => (
                  <div
                    key={reply.id}
                    className="bg-amber-200 w-full h-auto mt-6 mb-6 p-2"
                  >
                    {/* name and date */}
                    <div className="flex gap-2">
                      <div className=" w-10 h-10 rounded-[400px] ">
                        <img
                          src={reply.title}
                          onError={(e) => {
                            e.target.src =
                              "../../../src/assets/icons/Flynn.png";
                          }}
                        />
                      </div>
                      <div className="flex items-center">
                        {/* <p className="font-[600] text-text text-[14px] ">
                    {"author name"}
                  </p> */}
                        <p className="text-[#707070] font-[500] text-[12px] mt-2 ">
                          {formatInsertDate}
                        </p>
                      </div>
                    </div>
                    {/* title */}
                    <p className="text-text font-bold text-[18px] mt-3">
                      {reply.title}
                    </p>
                    {/* describe */}
                    <p className="font-[500] text-4 text-[#707070] mt-4 wrap-break-word">
                      {reply.describe}
                      {/* reply and like and dislike */}
                    </p>
                    <div className="flex items-center mt-4 gap-4 max-[1256]:gap-0 max-[1256]:flex-col ">
                      <div className="flex gap-2 ">
                        <svg
                          className="cursor-pointer"
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

                        <span className="text-[16px] font-[500]">
                          {reply.likeCount}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg
                          className="cursor-pointer"
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
                        <span className="text-[16px] font-[500] ">
                          {reply.disslikeCount}
                        </span>
                      </div>

                      <div
                        onClick={() => handleReplyComment(reply.commentId)}
                        className=" cursor-pointer border flex items-center justify-center w-25 h-10 border-blue text-blue text-4 font-medium rounded-[40px] "
                      >
                        {t("reply")}
                      </div>
                    </div>

                    {/* comment reply */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className=" flex items-center max-[540px]:mt-4 justify-center">
          {" "}
          {t("NoComment")}
        </div>
      )}

      

      {/* add comment mobile mode */}
      <div
        onClick={handleAddComment}
        className=" h-14 rounded-[40px] cursor-pointer bg-blue w-[345px] flex justify-center items-center mt-10 m-auto min-[768px]:hidden "
      >
        <div className="w-[107px] h-10 rounded-[40px] flex justify-center items-center gap-2 ">
          <img
            className="w-6 h-6"
            src="../../../src/assets/icons/comment-add-01.png"
          />
          <p className="text-[#FCFCFC] text-4 font-[500] ">{t("Comments")}</p>
        </div>
      </div>

      {showCommentBox && (
        <AddComment
          onSend={addComments}
          describe={addcommentDes}
          setDescribe={setAddCommentDes}
          title={addcommentTitle}
          setTitle={setAddCommentTitle}
        />
      )}
    </div>
  );
};

export default BlogCommentsModal;
