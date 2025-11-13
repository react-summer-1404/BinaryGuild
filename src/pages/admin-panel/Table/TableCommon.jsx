import { useTranslation } from "react-i18next";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/react";
const TableCommon = ({ users }) => {
  const { t } = useTranslation();

  const columns = [
    {
      key: "fName",
      label: t("name"),
    },
    {
      key: "userName",
      label: t("username"),
    },

    {
      key: "userRoles",
      label: t("Roll"),
    },
    {
      key: "gmail",
      label: t("email"),
    },
    {
      key: "profileCompletionPercentage",
      label: t("completeProfilePercent"),
    },
    {
      key: "active",
      label: t("situation"),
    },
    {
      key: "function",
      label: t("function"),
    },
  ];
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn className="w-30" key={column.key}>
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users?.listUser || []}>
        {(item) => (
          <TableRow className="h-12" key={item.id}>
            {(columnKey) => (
              <TableCell>
                {columnKey === "active"
                  ? item.active
                    ? "active"
                    : "inactive"
                  : getKeyValue(item, columnKey)}

                {columnKey === "function" ? (
                  <div>
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#fff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <defs>
                          {" "}
                          <style></style>{" "}
                        </defs>{" "}
                        <title />{" "}
                        <g id="dots">
                          {" "}
                          <circle class="cls-1" cx="16" cy="16" r="3" />{" "}
                          <circle class="cls-1" cx="16" cy="8" r="3" />{" "}
                          <circle class="cls-1" cx="16" cy="24" r="3" />{" "}
                          <path class="cls-2" d="M16,13v6a3,3,0,0,0,0-6Z" />{" "}
                          <path class="cls-2" d="M16,5v6a3,3,0,0,0,0-6Z" />{" "}
                          <path class="cls-2" d="M16,21v6a3,3,0,0,0,0-6Z" />{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                ) : (
                  <p>{""}</p>
                )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableCommon;
