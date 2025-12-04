import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import moment from "moment-jalaali";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import Cross from "../../../../core/icons/Cross";
import View from "../../../../core/icons/View";

const Favorites = ({favoriteBlogs ,favoriteCourses}) => {
  const { t } = useTranslation();
  const formatsBlogsDateStart = moment(
    favoriteBlogs?.myFavoriteNews?.news?.insertDate
  ).format("jYYYY/jMM/jDD");
  const formatsBlogsDateEnd = moment(
    favoriteBlogs?.myFavoriteNews?.news?.updateDate
  ).format("jYYYY/jMM/jDD");
  const formatsCoursesDateStart = moment(
    favoriteCourses?.favoriteCourseDto?.course?.startTime
  ).format("jYYYY/jMM/jDD");
  const formatsCoursesDateEnd = moment(
    favoriteCourses?.favoriteCourseDto?.course?.endTime
  ).format("jYYYY/jMM/jDD");
  // };
  return (
    <div className="w-full">
      <Toaster />
      <Table
        classNames={{ wrapper: "bg-background" }}
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
          <TableColumn className="bg-forgetpassbtn"></TableColumn>
        </TableHeader>
        <TableBody emptyContent={t("NoRow")}>
          {favoriteBlogs?.myFavoriteNews?.map((value) => {
            return (
              <TableRow>
                <TableCell>
                  <img
                    src={value.news?.currentImageAddressTumb}
                    onError={(e) => {
                      e.target.src = "/src/assets/images/script.png";
                    }}
                    className="size-16"
                  />
                </TableCell>
                <TableCell className="font-persian">{value.title}</TableCell>
                <TableCell className="font-persian">{value.auther}</TableCell>
                <TableCell className="font-persian">{formatsBlogsDateStart}</TableCell>
                <TableCell className="font-persian">{formatsBlogsDateEnd}</TableCell>
                <TableCell className="flex justify-center flex-nowrap pt-7">
                  <div className="m-auto">
                    <Cross />
                  </div>
                  <View id={value.id}/>
                </TableCell>
              </TableRow>
            );
          })}
          {favoriteCourses?.favoriteCourseDto?.map((value) => {
            return (
              <TableRow>
                <TableCell>
                  <img src={value.course?.imageAddress} className="size-16" />
                </TableCell>
                <TableCell className="font-persian">{value.courseTitle}</TableCell>
                <TableCell className="font-persian">{value.teacheName}</TableCell>
                <TableCell className="font-persian">{formatsCoursesDateStart}</TableCell>
                <TableCell className="font-persian">{formatsCoursesDateEnd}</TableCell>
                <TableCell className="flex justify-center flex-nowrap pt-7">
                  <Cross />
                  <View id={value.courseId} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Favorites;
