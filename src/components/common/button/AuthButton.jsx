import { Link } from "react-router-dom";
const AuthButton = ({onClick, text,type}) => {
  return (
    
      <button className="bg-[#3772FF] w-[398px] h-[48px] mt-[24px] p-[12.5px] text-[#FCFCFC] rounded-3xl" type={type} onClick={onClick}>
        {text}
      </button>
    
  );
};

export default AuthButton;
