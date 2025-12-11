import { Button } from "@heroui/button";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../core/redux/slices/FillterAccept";

const ReserveOrder = () => {
  const { t } = useTranslation();
  // const [border, setBorder] = useState("text-text");
  // const [background, setBackground] = useState("text-text");
  const acceptValue = useSelector((state)=> state.accept)
  const dispatch = useDispatch()


  // const changeBorder = () => {
  //   if (border == "text-text") {
  //     setBorder("border-red-700 text-red-700");
  //   } else {
  //     setBorder("text-text");
  //   }
  //   if (border == "border-red-700 text-red-700") {
  //     getUserReserve == false;
  //   }
  //   console.log(border);
  // };
  // const changeBackground = () => {
    
  //   if (background == "text-text") {
  //     setBackground("border-red-700 text-red-700");
  //   } else {
  //     setBackground("text-text");
  //   }
  //   if (background == "border-red-700 text-red-700") {
  //     getUserReserve == true;
  //   }
  //   console.log(background);
  // };

  return (
    <div className="flex flex-nowrap gap-3 mt-4">
      <p className="font-bold text-text mt-1.5">{t("Order")}</p>
      <Button
        radius="full"
        variant="bordered"
        aria-label="Increment value"
        onPress={()=>{dispatch(increment())}}
        // className={`${background}`}
      >
        <p className="font-bold">{t("Confirmed")}</p>
      </Button>
      <Button
        variant="bordered"
        radius="full"
        onPress={()=>{dispatch(decrement())}}
        // className={`${border}`}
      >
        <p className="font-bold">{acceptValue} {t("NotConfirmed")}</p>
      </Button>
    </div>
  );
};

export default ReserveOrder;
