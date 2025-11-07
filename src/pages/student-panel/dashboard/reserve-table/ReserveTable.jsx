import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { UserReserve } from "../../../../core/services/api/get-data";
import { p } from "framer-motion/client";

const ReserveTable = () => {
  const { data: reserveData } = useQuery({
    queryKey: ["GET_USER_RESERVE"],
    queryFn: UserReserve,
  });
  const { t } = useTranslation();
  const ReserveStatus = () => {
    if (reserveData?.accept === "false") {
      <p className="bg-red-500 text-white m-auto">{t("NotConfirmed")}</p>;
    } else {
      <p className="bg-green-500 text-white m-auto">{t("Confirmed")}</p>;
    }
  };
  console.log("ReserveStatus", ReserveStatus);

  return (
    <div className="w-3/5 flex flex-wrap gap-1">
      <div className="w-full flex flex-nowrap justify-between">
        <p className="w-1/2 text-start font-persian">{t("MenuText3")}</p>
        <Link to={"/panel/reserve-course"} className="w-1/2 text-end">
          <p className=" text-blue font-persian">{t("SeeOther")}</p>
        </Link>
      </div>
      <Table
        classNames={{ wrapper: "bg-background" }}
        aria-label="Example empty table"
      >
        <TableHeader className="bg-gray-0">
          <TableColumn className="bg-forgetpassbtn text-muted">#</TableColumn>
          <TableColumn className="bg-forgetpassbtn text-muted">
            {t("CourseName")}
          </TableColumn>
          <TableColumn className="bg-forgetpassbtn text-muted">
            {t("Status")}
          </TableColumn>
        </TableHeader>
        <TableBody emptyContent={t("NoRow")}>
          {reserveData?.map((value) => {
            return (
              <TableRow key="1">
                <TableCell>
                  <p>{value.courseId}</p>
                </TableCell>
                <TableCell>{value.courseName}</TableCell>
                <TableCell>
                  <span>{{ ReserveStatus } + value.accept}</span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReserveTable;
