import {
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
import Search from "../../../components/common/search-and-date/search/Search";
import View from "../../../core/icons/View";
import {
  GetAllUserCourses,
  GetCourses,
} from "../../../core/services/api/get-data";

const MyCourse = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState({
    PageNumber: 1,
    RowsOfPage: 8,
    SortingCol: "Active",
    SortType: "desc",
  });
  const { data: coursesData, refetch: refetchCoursesData } = useQuery({
    queryKey: ["GET_COURSES_DATA"],
    queryFn: () => GetAllUserCourses({ params: filter }),
  });
  console.log(coursesData, "coursesData");
  useEffect(() => {
    if (filter) {
      console.log("objectmskmcskamc", filter);
      refetchCoursesData();
    }
  }, [filter]);
  const formatInsertDate = moment(coursesData?.lastUpdate).format(
    "jYYYY/jMM/jDD"
  );
  return (
    <div className="w-11/12 m-auto flex flex-wrap gap-6">
      <div className="w-full flex justify-start">
        <p className="text-text font-bold text-2xl">{t("MenuText2")}</p>
      </div>
      <div className="flex flex-nowrap gap-4 w-1/3">
        <Search setFilter={setFilter} />
      </div>
      <div className="w-full mt-2.5">
        <Table
          classNames={{ wrapper: "bg-background" }}
          aria-label="Example empty table"
        >
          <TableHeader>
            <TableColumn className="bg-forgetpassbtn font-persian text-muted">
              #
            </TableColumn>
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
          {coursesData?.listOfMyCourses?.length ? (
            coursesData?.listOfMyCourses?.map((value) => {
              return (
                <TableBody>
                  <TableRow key="1">
                    <TableCell>
                      <img src={value.tumbImageAddress} className="size-14" />
                    </TableCell>
                    <TableCell className="font-persian">
                      {value.courseTitle}
                    </TableCell>
                    <TableCell className="font-persian">
                      {value.fullName}
                    </TableCell>
                    <TableCell className="font-persian">
                      {formatInsertDate}
                    </TableCell>
                    <TableCell>
                      <span className="font-persian">
                        {t("Toman")} {value.cost}
                      </span>
                    </TableCell>
                    <TableCell className="flex justify-center font-persian flex-nowrap pt-7">
                      <View id={value.courseId} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })
          ) : (
            <TableBody emptyContent={t("NoCourse")} />
          )}
        </Table>
      </div>
    </div>
  );
};

export default MyCourse;
