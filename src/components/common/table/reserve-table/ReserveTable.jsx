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
import { useTranslation } from "react-i18next";
import { UserReserve } from "../../../../core/services/api/get-data";
import View from "../../../../core/icons/View";
import Cross from "../../../../core/icons/Cross";
import { Delete } from "../../../../core/services/api/delete-data";

const ReserveTable = () => {
  const { data: reserveData } = useQuery({
    queryKey: ["GET_USER_RESERVE"],
    queryFn: UserReserve,
  });
  const { data: deleteData } = useQuery({
    queryKey: ["DELETE"],
    queryFn: Delete,
  });
  const { t } = useTranslation();
  const ReserveStatus = () => {
    if (reserveData?.accept === false) {
      {
        t("NotConfirmed");
      }
    } else {
      {
        t("Confirmed");
      }
    }
  };
  console.log("ReserveStatus", ReserveStatus);

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
        {reserveData?.map((value) => {
          return (
            <TableRow>
              <TableCell>
                <img src={value.image} className="size-15" />
              </TableCell>
              <TableCell>{value.courseName}</TableCell>
              <TableCell>{value.teacher}</TableCell>
              <TableCell>{value.insertDate}</TableCell>
              <TableCell>
                <Chip variant="faded"> {ReserveStatus}</Chip>
              </TableCell>
              <TableCell className="flex justify-center flex-nowrap pt-7">
                <View />
                <div className="w-full cursor-pointer" onClick={deleteData?.data}>
                  <Cross />
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ReserveTable;
