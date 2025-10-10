import { Link } from "react-router-dom";
const Button = () => {


  return (
    <div className="w-35 rounded-3xl">
      <button className="rounded-4xl bg-[#3772FF]" >
        <Link to={"/register"}> ثبت نام یا ورود</Link>
      </button>
    </div>
  );
};

export default Button;
