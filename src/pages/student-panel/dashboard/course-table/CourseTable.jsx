import { Table, TableBody, TableColumn, TableHeader } from "@heroui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CourseTable = () => {
  const { t } = useTranslation();
  return (
    <div className="w-3/4 flex flex-wrap gap-1">
      <div className="w-full flex flex-nowrap justify-between">
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
          <TableColumn className='bg-forgetpassbtn text-muted'>#</TableColumn>
          <TableColumn className='bg-forgetpassbtn text-muted'>{t("CourseName")}</TableColumn>
          <TableColumn className='bg-forgetpassbtn text-muted'>{t("TeachersName")}</TableColumn>
          <TableColumn className='bg-forgetpassbtn text-muted'>{t("StartEvent")}</TableColumn>
          <TableColumn className='bg-forgetpassbtn text-muted'>{t("CourseLevel")}</TableColumn>
        </TableHeader>
        <TableBody emptyContent={t("NoRow")}>{[]}</TableBody>
      </Table>
    </div>
  );
};

export default CourseTable;
