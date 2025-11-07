import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from "@heroui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { UserCourses } from "../../../../core/services/api/get-data";
import { useQuery } from "@tanstack/react-query";

const CourseTable = () => {
  const { t } = useTranslation();
  const { data: myCoursesData } = useQuery({
    queryKey: ["GET_USER_COURSES"],
    queryFn: UserCourses,
  });
  console.log(myCoursesData);

  return (
    <div className="w-3/4 flex flex-wrap">
      <div className="w-full flex flex-nowrap h-0 justify-between">
        <p className="w-1/2 text-start font-persian">{t("MenuText2")}</p>
        <Link to={"/panel/my-courses"} className="w-1/2 text-end">
          <p className=" text-blue font-persian">{t("SeeOther")}</p>
        </Link>
      </div>
      <Table
        classNames={{ wrapper: "bg-background" }}
        aria-label="Example empty table"
      >
        <TableHeader>
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
            {t("Cost")}
          </TableColumn>
        </TableHeader>
        <TableBody emptyContent={t("NoRow")}>
          {myCoursesData?.map((value) => {
            return (
              <TableRow key="1">
                <TableCell>
                  <img src={value.tumbImageAddress} className="size-14"/>
                </TableCell>
                <TableCell>{value.courseTitle}</TableCell>
                <TableCell>{value.fullName}</TableCell>
                <TableCell>{value.lastUpdate}</TableCell>
                <TableCell>
                  <span> {t("Toman")} {value.cost}</span>
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
