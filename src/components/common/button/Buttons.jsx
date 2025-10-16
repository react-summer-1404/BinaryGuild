import { Link } from "react-router-dom";
import { Button } from "@heroui/button";

const Buttons = () => {
  return (
    <div className="w-32 rounded-3xl pt-0.5 cursor-pointer">
      <Link to={"/RegistrationAndLogin"}>
        <Button color="primary" radius="full">
          ثبت نام یا ورود
        </Button>
      </Link>
    </div>
  );
};

export default Buttons;
