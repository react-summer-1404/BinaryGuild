import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";
import { GetCourseComments } from "../../core/services/api/get-data";
<<<<<<< HEAD
import { AddReplyCourseComment } from "../../core/services/api/post-data";
import moment from "moment-jalaali";
import ReplyComment from "../../../src/components/common/comment/ReplyComment";

=======
import {
  AddCommentCourses,
  AddReplyCommentCourse,
} from "../../core/services/api/post-data";

import AddComment from "../../components/common/comment/AddComment";
import { buildCommentTree } from "./commentTree";
import CommentItem from "./commentItem";
>>>>>>> feature/adminPanel

const CourseCommentModal = ({ onClose, course, courseId }) => {
  const { t } = useTranslation();

  const [commentTree, setCommentTree] = useState([]);
  const [selectedComment, setSelectedComment] = useState(null);

  const [addCommentTitle, setAddCommentTitle] = useState("");
  const [addCommentDes, setAddCommentDes] = useState("");
  const [addCommentReplyTitle, setAddCommentReplyTitle] = useState("");
  const [addCommentReplyDes, setAddCommentReplyDes] = useState("");

  const [showCommentBox, setShowCommentBox] = useState(false);
  const [showReplyDesktopMode, setShowReplyDesktopMode] = useState(false);

<<<<<<< HEAD
  const [comment, setComment] = useState([]);

  const formatInsertDate = moment(courseId.insertDate).format("jYYYY/jMM/jDD");
  

  //   replies

  const handleReplyComment = () => {
    setShowReply(!showReply);
  };

  // const handleReplyTheReplyComment = () => {
  //   setShowReplyToReply(!showReplyToReply);
  // };

  // add comment
  const handleAddComment = () => {
    setShowCommentBox(!showCommentBox);
  };

  const handleAddCommentDeskTopMode = () => {
    setShowReplyDesktopMode(!showReplyDesktopMode);
  };

  //   comments
=======
>>>>>>> feature/adminPanel
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await GetCourseComments(courseId);
        const tree = buildCommentTree(response);
        setCommentTree(tree);
      } catch (error) {
        console.log(error);
      }
    };

    if (courseId) fetchComments();
  }, [courseId]);

  const addComments = async () => {
    try {
      await AddCommentCourses({
        CourseId: courseId,
        Title: addCommentTitle,
        Describe: addCommentDes,
      });
      toast.success(t("AddCommentSuccessfully"));
      setAddCommentTitle("");
      setAddCommentDes("");
    } catch (error) {
      console.log(error);
      toast.error(t("AddCommentError"));
    }
  };

  const addCommentsReply = async () => {
    try {
      await AddReplyCommentCourse({
        CommentId: selectedComment,
        CourseId: courseId,
        Title: addCommentReplyTitle,
        Describe: addCommentReplyDes,
      });
      toast.success(t("AddCommentSuccessfully"));
      setAddCommentReplyTitle("");
      setAddCommentReplyDes("");
      setSelectedComment(null); 
    } catch (error) {
      console.log(error);
      toast.error(t("AddCommentError"));
    }
  };

  const handleReplyComment = (commentId) => {
    setSelectedComment(commentId === selectedComment ? null : commentId);
    setAddCommentReplyTitle("");
    setAddCommentReplyDes("");
  };

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

  return (
    <div className="border text-right overflow-y-scroll scrollbar-hide text-text shadow-shadow shadow-xs border-boarder p-4 fixed inset-0 z-50 m-auto w-200 h-[653px] rounded-4xl bg-authcommonbackground max-[1245px]:w-160 max-[1245px]:h-120 max-[700px]:w-120 max-[500px]:w-95">
      <Toaster />

      {/* Header */}
      <div className="flex justify-between">
        <div className="w-full flex">
          <h2 className="text-text2 font-bold text-[20px]">
            {t("CommentsHead")}
          </h2>
          <p className="text-commentHead max-[500px]:w-30">
            ( {t("CourseName")} {course.title} )
          </p>
        </div>
        <button
          onClick={onClose}
          className="cursor-pointer w-25 h-10 border border-[#FF5353] rounded-[34px] flex items-center justify-center"
        >
          <img src="../../../src/assets/icons/cancel-01.png" />
          <span className="font-medium text-[18px] text-[#FF5353]">
            {t("close")}
          </span>
        </button>
      </div>

     
      <div
        onClick={handleAddCommentDeskTopMode}
        className="w-[107px] h-10 cursor-pointer bg-blue rounded-[40px] mt-10 flex justify-center items-center gap-2 max-[768px]:hidden"
      >
        <img
          className="w-6 h-6"
          src="../../../src/assets/icons/comment-add-01.png"
        />
        <p className="text-[#FCFCFC] text-4 font-medium">{t("Comments")}</p>
      </div>

      {showReplyDesktopMode && (
        <AddComment
          onSend={addComments}
          describe={addCommentDes}
          setDescribe={setAddCommentDes}
          title={addCommentTitle}
          setTitle={setAddCommentTitle}
        />
      )}

      {commentTree.length > 0 ? (
        <div className="h-auto mt-6 pr-2">
          {commentTree.map((item) => (
            <CommentItem
              key={item.id}
              item={item}
              onReply={handleReplyComment}
              selectedComment={selectedComment}
              addCommentsReply={addCommentsReply}
              addcommentReplyTitle={addCommentReplyTitle}
              setAddCommentReplyTitle={setAddCommentReplyTitle}
              addcommentReplyDes={addCommentReplyDes}
              setAddCommentReplyDes={setAddCommentReplyDes}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center max-[540px]:mt-4 justify-center">
          {t("NoComment")}
        </div>
      )}




      

{/* mobile comment */}
      <div
        onClick={handleAddComment}
        className="h-14 rounded-[40px] cursor-pointer bg-blue w-[345px] flex justify-center items-center mt-10 m-auto min-[768px]:hidden"
      >
        <div className="w-[107px] h-10 rounded-[40px] flex justify-center items-center gap-2">
          <img
            className="w-6 h-6"
            src="../../../src/assets/icons/comment-add-01.png"
          />
          <p className="text-[#FCFCFC] text-4 font-medium">{t("Comments")}</p>
        </div>
      </div>

      {showCommentBox && (
        <AddComment
          onSend={addComments}
          describe={addCommentDes}
          setDescribe={setAddCommentDes}
          title={addCommentTitle}
          setTitle={setAddCommentTitle}
        />
      )}
    </div>
  );
};

export default CourseCommentModal;
