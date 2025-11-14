import { useQuery } from "@tanstack/react-query";
import React from "react";
import { GetFavoriteBlogs } from "../../../../core/services/api/get-data";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useTranslation } from "react-i18next";
import View from "../../../../core/icons/View";
import Cross from "../../../../core/icons/Cross";

const FavBlog = () => {
  const { t } = useTranslation();
  const { data: favoriteBlogs } = useQuery({
    queryKey: ["GET_FAV_BLOGS"],
    queryFn: GetFavoriteBlogs,
  });
  console.log("favoriteBlogs", favoriteBlogs);
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
          {favoriteBlogs?.map((value) => {
            return (
              <TableRow>
                <TableCell>
                  <img
                    src={value.news?.currentImageAddressTumb}
                    className="size-16"
                  />
                </TableCell>
                <TableCell>{value.title}</TableCell>
                <TableCell>{value.auther}</TableCell>
                <TableCell>{value.news?.insertDate}</TableCell>
                <TableCell>{value.news?.updateDate}</TableCell>
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
};

export default FavBlog;
