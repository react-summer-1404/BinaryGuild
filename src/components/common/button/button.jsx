import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  const nav = () => {
    navigate("/RegistrationAndLogin");
  };

  return (
    <div className="w-35 rounded-3xl pt-0.5 cursor-pointer">
      <button className="rounded-4xl bg-blue" onClick={nav}>
        ثبت نام یا ورود
      </button>
    </div>
  );
};

export default Button;
