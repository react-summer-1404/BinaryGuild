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
import { useTranslation } from "react-i18next";
import Cross from "../../../../core/icons/Cross";
import View from "../../../../core/icons/View";
import { UserReserve } from "../../../../core/services/api/get-data";
import { Link } from "react-router-dom";

const ReserveTable = () => {
  const { data: reserveData , isSuccess } = useQuery({
    queryKey: ["GET_USER_RESERVE"],
    queryFn: UserReserve,
  });
  const formatInsertDate = moment(reserveData?.insertDate).format(
    "jYYYY/jMM/jDD"
  );
  const { t } = useTranslation();

  return (
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
                  <img src={value.image} className="size-14" />
                </TableCell>
                <TableCell>{value.courseName}</TableCell>
                <TableCell>{value.teacher}</TableCell>
                <TableCell>{formatInsertDate}</TableCell>
                <TableCell>
                  {" "}
                  {value.accept == true ? (
                    <Chip
                      variant="faded"
                      classNames={{
                        base: "bg-green-600 text-text font-persian text-canter  mt-2",
                      }}
                    >
                      {t("Confirmed")}
                    </Chip>
                  ) : (
                    <Chip
                      variant="faded"
                      classNames={{
                        base: "bg-red-600 text-text font-persian text-canter mt-2",
                      }}
                    >
                      {t("NotConfirmed")}
                    </Chip>
                  )}
                </TableCell>
                <TableCell className="flex justify-center gap-2 flex-nowrap pt-7">
                  <div className="w-1/2 cursor-pointer">
                    <Link to={"/panel/payment"}>
                      {/* <Chip
                  
                  >
                    {" "}
                    {value.accept === true ? t("Payment") : <Cross />}
                  </Chip> */}
                      {value.accept === true ? (
                        <Chip
                          variant="faded"
                          classNames={{
                            base: "bg-forgetpassbtn text-text font-persian text-canter",
                          }}
                        >
                          {t("Payment")}{" "}
                        </Chip>
                      ) : (
                        <div className="m-auto w-3/4">
                        <Cross /></div>
                      )}
                    </Link>
                  </div>
                  <View id={value.courseId} />
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
};

export default ReserveTable;
