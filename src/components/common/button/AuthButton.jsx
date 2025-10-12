import { Link } from "react-router-dom";
const AuthButton = ({onclick, text}) => {
  return (
    
      <button className="bg-[#3772FF] w-[398px] h-[48px] mt-[24px] p-[12.5px] text-[#FCFCFC] rounded-3xl" type="submit" onclick={onclick}>
        {text}
      </button>
    
  );
};

export default AuthButton;
