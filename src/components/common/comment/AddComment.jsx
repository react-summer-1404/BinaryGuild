import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const AddComment = ({title,setTitle,describe,setDescribe,onSend}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);

  const handleSendTitle=(e)=>{
    const Title = e.target.value;
    setTitle(Title);
  }

  const handleSendDescription=(e)=>{
    const Des = e.target.value;
    setDescribe(Des);
  }  

  const handleSend=()=>{
    setOpen(false);
    onSend();
  }   
  



  return (
    <div className={`border p-2 border-blue gap-2 flex items-center justify-between rounded-[24px] bg-background m-auto mt-5 w-[490px] h-auto max-[700px]:w-100 max-[500px]:w-70  ${open ? "" : "hidden"} `}>
      <div className=" w-[25%] justify-center items-center gap-2 flex h-full ">
        <div onClick={handleSend} className="cursor-pointer flex justify-center items-center w-10 h-10 bg-blue rounded-[40px] ">
          
        
          <img
            className="w-5 h-5"
            src="../../../src/assets/icons/sent.png"
            alt="send"
          />{" "}
        </div>
        <div className="cursor-pointer flex justify-center items-center  border border-[#c0bebe] w-10 h-10 bg-[#FCFCFC] rounded-[40px] ">
          <img
            className="w-5 h-5"
            src="../../../src/assets/icons/smile.png"
            alt="send"
          />
        </div>
      </div>
      <div className=" w-[75%] h-full ">
        <input
          type="text"
          placeholder={t("commentTitle")}
          value={title}
          onChange={handleSendTitle}
          className=" p-1 border-b-1 flex items-center text-[14px] font-medium text-[#707070] border-[#DCDCDC] focus:outline-0  w-[97%] h-1/2"
        />

        <textarea
          type="text"
          placeholder={t("commentDescribe")}
          value={describe}
          onChange={handleSendDescription}
          className="text-right focus:outline-0 mt-2 w-[97%] wrap-break-word flex items-center h-1/2 text-[14px] font-medium text-[#707070]"
        />
      </div>
    </div>
  );
};

export default AddComment;
