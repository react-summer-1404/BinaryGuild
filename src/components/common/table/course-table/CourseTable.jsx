import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import View from "../../../../core/icons/View";
import { UserCourses } from "../../../../core/services/api/get-data";
import moment from "moment-jalaali";

const CourseTable = () => {
  const { t } = useTranslation();
  const { data: myCoursesData } = useQuery({
    queryKey: ["GET_USER_COURSES"],
    queryFn: UserCourses,
  });
    const formatInsertDate = moment(myCoursesData?.lastUpdate).format(
      "jYYYY/jMM/jDD"
    );
  return (
    <div className="w-full mt-2.5">
      <Table
        classNames={{ wrapper: "bg-background mb-10" }}
        aria-label="Example empty table"
      >
        <TableHeader>
          <TableColumn className="bg-forgetpassbtn font-persian text-muted">#</TableColumn>
          <TableColumn className="bg-forgetpassbtn font-persian text-muted">
            {t("Name")}
          </TableColumn>
          <TableColumn className="bg-forgetpassbtn font-persian text-muted">
            {t("TeachersName")}
          </TableColumn>
          <TableColumn className="bg-forgetpassbtn font-persian text-muted">
            {t("StartEvent")}
          </TableColumn>
          <TableColumn className="bg-forgetpassbtn font-persian text-muted">
            {t("EndEvent")}
          </TableColumn>
          <TableColumn className="bg-forgetpassbtn font-persian text-muted">
            {t("")}
          </TableColumn>
        </TableHeader>
        <TableBody emptyContent={t("NoCourse")}>
          {myCoursesData?.map((value) => {
            return (
              <TableRow key="1">
                <TableCell>
                  <img src={value.tumbImageAddress} className="size-14" />
                </TableCell>
                <TableCell className="font-persian">{value.courseTitle}</TableCell>
                <TableCell className="font-persian">{value.fullName}</TableCell>
                <TableCell className="font-persian">{formatInsertDate}</TableCell>
                <TableCell>
                  <span className="font-persian">
                    {t("Toman")} {value.cost}
                  </span>
                </TableCell>
                <TableCell className="flex justify-center font-persian flex-nowrap pt-7">
                  <View id={value.courseId}/>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default CourseTable;
