import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  const nav = () => {
    navigate("/RegistrationAndLogin");
  };

  return (
    <div className="w-35 rounded-3xl">
      <button className="rounded-4xl bg-[#3772FF]" onClick={nav}>
        ثبت نام یا ورود
      </button>
    </div>
  );
};

export default Button;
