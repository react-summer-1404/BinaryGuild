import { Link } from "react-router-dom";
import { Button } from "@heroui/button";

const Buttons = () => {
  return (
    <div className="w-28 rounded-3xl pt-0.5 cursor-pointer">
      <Link to={"/RegistrationAndLogin"}>
        <Button color="primary" radius="full">
          <p className="font-persian">ثبت نام یا ورود</p>
        </Button>
      </Link>
    </div>
  );
};

export default Buttons;
