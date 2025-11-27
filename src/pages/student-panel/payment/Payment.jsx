import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import moment from "moment-jalaali";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Search from "../../../components/common/search-and-date/search/Search";
import Pay from "../../../core/icons/Pay";
import View from "../../../core/icons/View";
import { GetAllUserCourses } from "../../../core/services/api/get-data";

const Payment = () => {
  const [filter, setFilter] = useState({
    PageNumber: 1,
    RowsOfPage: 10,
    SortingCol: "DESC",
    SortType: "LastUpdate",
  });
  const { data: reservePayment, refetch: refetchPaymentDate } = useQuery({
    queryKey: ["GET_USER_RESERVE"],
    queryFn: () => GetAllUserCourses({ params: filter }),
  });

  const { t } = useTranslation();
  const formatInsertDate = moment(reservePayment?.course?.startTime).format(
    "jYYYY/jMM/jDD"
  );
  const formatInsertDate2 = moment(reservePayment?.course?.endTime).format(
    "jYYYY/jMM/jDD"
  );
  useEffect(() => {
    if (filter) {
      console.log("paymentttttttttkkkkkk", filter);
      refetchPaymentDate();
    }
  }, [filter]);
  return (
    <div className="w-11/12 m-auto flex flex-wrap gap-6">
      <div className="w-full flex justify-start">
        <p className="text-text font-bold text-2xl">{t("MenuText6")}</p>
      </div>
      <div className="flex w-full">
        <div className="w-1/3">
          <Search setFilter={setFilter} />
        </div>
      </div>
      <div className="w-full">
        <Table
          classNames={{ wrapper: "bg-background" }}
          aria-label="Example empty table"
        >
          <TableHeader>
            <TableColumn className="bg-forgetpassbtn font-persian text-muted">
              {t("CourseGroup")}
            </TableColumn>
            <TableColumn className="bg-forgetpassbtn font-persian text-muted">
              {t("PaymentDate")}
            </TableColumn>
            <TableColumn className="bg-forgetpassbtn font-persian text-muted">
              {t("DateEntered")}
            </TableColumn>
            <TableColumn className="bg-forgetpassbtn font-persian text-muted">
              {t("PaymentStatus")}
            </TableColumn>
            <TableColumn className="bg-forgetpassbtn font-persian text-muted">
              {t("PaymentToman")}
            </TableColumn>
            <TableColumn className="bg-forgetpassbtn font-persian text-muted">
              {t("Operation")}
            </TableColumn>
          </TableHeader>
          <TableBody emptyContent={t("NoCourse")}>
            {reservePayment?.listOfMyCourses?.map((value) => {
              return (
                <TableRow key="1">
                  <TableCell>
                    <img src={value.tumbImageAddress} className="size-14" />
                  </TableCell>
                  <TableCell className="font-persian">{formatInsertDate}</TableCell>
                  <TableCell className="font-persian">{formatInsertDate2}</TableCell>
                  <TableCell>
                    {value.paymentStatus === "پرداخت نشده" ? (
                      <Chip className="bg-lightRed border-red-600 border-2 text-textRed pt-0.5 font-persian">{value.paymentStatus}</Chip>
                    ) : (
                      <Chip className="bg-lightBlue border-green-600 border-2 text-textBlue pt-0.5 font-persian">{value.paymentStatus}</Chip>
                    )}
                  </TableCell>
                  <TableCell>
                    <span className="font-persian">
                      {t("Toman")} {value.cost}
                    </span>
                  </TableCell>
                  <TableCell className="flex justify-center flex-nowrap pr-0 pt-8">
                    <Pay/>
                    <Link to={`${value.courseId}`}>
                    <View/></Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Payment;
