import {
  Button,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import moment from "moment-jalaali";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Cross from "../../../../core/icons/Cross";
import View from "../../../../core/icons/View";
import {
  PatchCoursePayment,
  UserReserve,
} from "../../../../core/services/api/get-data";
import Payment from "../../../../pages/student-panel/my-reserve-course/payment/Payment";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ReserveTable = () => {
  const { t } = useTranslation();
  const { data: reserveData, isSuccess } = useQuery({
    queryKey: ["GET_USER_RESERVE2"],
    queryFn: UserReserve,
  });
  const sortOptions = [
    { key: "confirmed", label: t("Confirmed") },
    { key: "notConfirmed", label: t("NotConfirmed") },
  ];
  const [select, setSelect] = useState(sortOptions[0].label);
  const formatInsertDate = moment(reserveData?.insertDate).format(
    "jYYYY/jMM/jDD"
  );
  const [displayBlock, setDisplayBlock] = useState("hidden");

  const { reserveId: id } = useParams();
  console.log(id);
  const handelPaymentBlock = () => {
    if (displayBlock == "hidden") {
      setDisplayBlock(
        "w-[65.5%] absolute top-33 bg-paymentBackground backdrop-blur-[50%] z-40 rounded-3xl m-auto block"
      );
    } else {
      setDisplayBlock("hidden");
    }
    try {
      if (reserveData?.reserveId) {
        PatchCoursePayment(reserveData?.reserveId);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleAccept = () => {
    if (select === sortOptions[0].label) {
      reserveData?.accept === true;
      toast.success("yeeeeees");
      console.log("getUserReserve?.accept1", reserveData?.accept);
    }
    if (select === sortOptions[1].label) {
      reserveData?.accept === false;
      toast.error("nooooooo");
      console.log("getUserReserve?.accept2", reserveData?.accept);
    }
  };
  console.log("block", displayBlock);
  return (
    <div className="w-full">
      <div>
        <Toaster />
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" className="font-persian p-2 mt-4 flex">
              {select}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Dynamic Actions"
            onAction={(key) => {
              const selectSortOptions = sortOptions.find((e) => e.key === key);
              if (selectSortOptions) setSelect(selectSortOptions.label);
            }}
          >
            {sortOptions.map((value) => (
              <DropdownItem
                key={value.key}
                classNames={{ title: "font-persian text-end" }}
                onClick={handleAccept}
              >
                {value.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <Table
        classNames={{ wrapper: "bg-background" }}
        aria-label="Example empty table"
        className="overflow-hidden h-150 relative mb-10"
      >
        <TableHeader className="bg-gray-0">
          <TableColumn className="bg-forgetpassbtn text-muted">#</TableColumn>
          <TableColumn className="bg-forgetpassbtn text-muted">
            {t("CourseName")}
          </TableColumn>
          <TableColumn className="bg-forgetpassbtn text-muted">
            {t("TeachersName")}
          </TableColumn>
          <TableColumn className="bg-forgetpassbtn text-muted">
            {t("StartEvent")}
          </TableColumn>
          <TableColumn className="bg-forgetpassbtn text-muted">
            {t("Status")}
          </TableColumn>
          <TableColumn className="bg-forgetpassbtn"></TableColumn>
        </TableHeader>
        <TableBody emptyContent={t("NoRow")}>
          {isSuccess &&
            reserveData?.map((value) => {
              return (
                <TableRow>
                  <TableCell>
                    <img
                      src={value.image}
                      onError={(e) => {
                        e.target.src =
                          "/src/assets/images/3d-hygge-top-view-of-laptop-glasses-cup-of-coffee-headphones-1 1.png";
                      }}
                      className="size-14"
                    />
                  </TableCell>
                  <TableCell className="text-[12px] font-persian">
                    {value.courseName}
                  </TableCell>
                  <TableCell className="text-[12px] font-persian">
                    {value.teacher}
                  </TableCell>
                  <TableCell className="text-[12px] font-persian">
                    {formatInsertDate}
                  </TableCell>
                  <TableCell>
                    {" "}
                    {value.accept == true ? (
                      <Chip
                        variant="faded"
                        classNames={{
                          base: "bg-green-600 text-[12px] text-text border-green-800 font-persian text-canter  mt-2",
                        }}
                      >
                        {t("Confirmed")}
                      </Chip>
                    ) : (
                      <Chip
                        variant="faded"
                        classNames={{
                          base: "bg-red-600 text-[12px] text-text border-red-900 font-persian text-canter mt-2",
                        }}
                      >
                        {t("NotConfirmed")}
                      </Chip>
                    )}
                  </TableCell>
                  <TableCell className="flex justify-center gap-2 flex-nowrap pt-7">
                    <div className="w-1/2 cursor-pointer">
                      {value.accept === true ? (
                        <Chip
                          variant="faded"
                          classNames={{
                            base: "bg-forgetpassbtn text-[12px] text-text font-persian text-canter",
                          }}
                          onClick={handelPaymentBlock}
                        >
                          {t("Payment")}{" "}
                        </Chip>
                      ) : (
                        <div className="m-auto w-3/4">
                          <Cross />
                        </div>
                      )}
                    </div>
                    <View id={value.courseId} />
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <div className={displayBlock}>
        <div className="flex mb-10 flex-wrap gap-2 w-full">
          <div className="w-1/6 flex flex-wrap mt-5 p-4">
            <button className="bg-background rounded-4xl m-auto h-10 w-10">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3 mb-1"
                onClick={handelPaymentBlock}
              >
                <path
                  d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
                  stroke="#817f7f"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="w-1/2 flex justify-start gap-3 flex-wrap m-auto mr-18">
            <p className="text-3xl w-full text-text font-bold">
              {t("PaymentForm")}
            </p>
            <p className="w-full text-text text-center font-bold">
              {t("PaymentForm2")}
            </p>
          </div>
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default ReserveTable;
