import React from "react";
import AddComment from "../../components/common/comment/AddComment";
import moment from "moment-jalaali";

const CommentItem = ({
  item,
  onReply,
  selectedComment,
  addCommentsReply,
  addcommentReplyTitle,
  setAddCommentReplyTitle,
  addcommentReplyDes,
  setAddCommentReplyDes,
}) => {
  const isReplying = selectedComment === item.id;
  const formatInsertDate = moment(item.insertDate).format("jYYYY/jMM/jDD");

  return (
    <div className="border-r pr-4 mt-6">
      {/* Header */}
      <div className="flex gap-2">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src={item.pictureAddress || "../../../src/assets/icons/Flynn.png"}
            onError={(e) => {
              e.target.src = "../../../src/assets/icons/Flynn.png";
            }}
          />
        </div>

        <div>
          <p className="font-semibold text-text text-[14px]">{item.author}</p>
          <p className="text-gray-400 font-medium text-[12px] mt-2">
            {formatInsertDate}
          </p>
        </div>
      </div>

      <p className="text-text font-bold text-[18px] mt-3">{item.title}</p>
      <p className="font-medium text-gray-400 mt-4">{item.describe}</p>

      <div
        onClick={() => onReply(item.id)}
        className="cursor-pointer border flex items-center justify-center w-25 h-10 border-blue text-blue text-4 font-medium rounded-[40px] mt-3"
      ></div>

      {isReplying && (
        <div className="mt-4">
          <AddComment
            onSend={addCommentsReply}
            describe={addcommentReplyDes}
            setDescribe={setAddCommentReplyDes}
            title={addcommentReplyTitle}
            setTitle={setAddCommentReplyTitle}
          />
        </div>
      )}

      {item.children?.length > 0 && (
        <div className="ml-6 mt-4 border-r pr-4">
          {item.children.map((child) => (
            <CommentItem
              key={child.id}
              item={child}
              onReply={onReply}
              selectedComment={selectedComment}
              addCommentsReply={addCommentsReply}
              addcommentReplyTitle={addcommentReplyTitle}
              setAddCommentReplyTitle={setAddCommentReplyTitle}
              addcommentReplyDes={addcommentReplyDes}
              setAddCommentReplyDes={setAddCommentReplyDes}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
