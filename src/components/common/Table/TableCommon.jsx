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
const TableCommon = ({users}) => {
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
      key: "roles",
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
        {(column) => <TableColumn className="w-30" key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={users?.listUser || []}>
        {(item) => (
          <TableRow className="h-15" key={item.id}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableCommon;
