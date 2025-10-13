import { Link } from "react-router-dom";
const AuthButton = ({onClick, text}) => {
  return (
    
      <button className="bg-[#3772FF] w-[398px] h-[48px] mt-[24px] p-[12.5px] text-[#FCFCFC] rounded-3xl" type="submit" onClick={onClick}>
        {text}
      </button>
    
  );
};

export default AuthButton;
