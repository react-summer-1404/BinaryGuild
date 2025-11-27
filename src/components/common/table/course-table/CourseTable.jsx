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
    <div className="w-full ">
      <Table
        classNames={{ wrapper: "bg-background" }}
        aria-label="Example empty table"
      >
        <TableHeader>
          <TableColumn className="bg-forgetpassbtn text-muted">#</TableColumn>
          <TableColumn className="bg-forgetpassbtn text-muted">
            {t("Name")}
          </TableColumn>
          <TableColumn className="bg-forgetpassbtn text-muted">
            {t("TeachersName")}
          </TableColumn>
          <TableColumn className="bg-forgetpassbtn text-muted">
            {t("StartEvent")}
          </TableColumn>
          <TableColumn className="bg-forgetpassbtn text-muted">
            {t("EndEvent")}
          </TableColumn>
          <TableColumn className="bg-forgetpassbtn text-muted">
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
                <TableCell>{value.courseTitle}</TableCell>
                <TableCell>{value.fullName}</TableCell>
                <TableCell>{formatInsertDate}</TableCell>
                <TableCell>
                  <span>
                    {t("Toman")} {value.cost}
                  </span>
                </TableCell>
                <TableCell className="flex justify-center flex-nowrap pt-7">
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
