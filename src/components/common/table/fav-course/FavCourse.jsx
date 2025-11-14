import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { GetFavoriteCourses } from '../../../../core/services/api/get-data';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/react';
import View from '../../../../core/icons/View';
import Cross from '../../../../core/icons/Cross';

const FavCourse = () => {
  const { t } = useTranslation();
  const { data: favoriteCourses } = useQuery({
    queryKey: ["GET_FAV_BLOGS"],
    queryFn: GetFavoriteCourses,
  });
  console.log("favoriteCourses", favoriteCourses);
  return (
    <div className="w-full">
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
          <TableColumn className="bg-forgetpassbtn"></TableColumn>
        </TableHeader>
        <TableBody>
          {favoriteCourses?.map((value) => {
            return (
              <TableRow>
                <TableCell>
                  <img
                    src={value.course?.imageAddress}
                    className="size-16"
                  />
                </TableCell>
                <TableCell>{value.courseTitle}</TableCell>
                <TableCell>{value.teacheName}</TableCell>
                <TableCell>{value.course?.startTime}</TableCell>
                <TableCell>{value.course?.endTime}</TableCell>
                <TableCell className="flex justify-center flex-nowrap pt-7">
                  <View />
                  <div className="w-full" onClick={() => {}}>
                    <Cross />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default FavCourse
