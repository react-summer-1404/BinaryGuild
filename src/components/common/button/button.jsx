import { Link } from "react-router-dom";
const Button = () => {
  return (
    <div className="w-35 rounded-3xl">
      <Link to={"/register"}>
        <button className="rounded-4xl bg-[#3772FF] text-white">ثبت نام یا ورود</button>
      </Link>
    </div>
  );
};

export default Button;
