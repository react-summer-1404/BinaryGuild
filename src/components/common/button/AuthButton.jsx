import { Link } from "react-router-dom";
const AuthButton = ({onclick, text}) => {
  return (
    <div className="bg-[#3772FF] w-35 text-[#FCFCFC] rounded-3xl" >
      <button type="submit" onclick={onclick}>
        {text}
      </button>
    </div>
  );
};

export default AuthButton;
