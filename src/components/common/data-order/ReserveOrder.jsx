import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { UserReserve } from "../../../core/services/api/get-data";

const ReserveOrder = ({setFilter}) => {
  const { t } = useTranslation();
  const sortOptions = [
    { key: "confirmed", label: t("Confirmed") },
    { key: "notConfirmed", label: t("NotConfirmed") },
  ];
  const [select, setSelect] = useState(sortOptions[0].label);
  const handleAccept = () => {
    // if (select === sortOptions[0].label) {
    //   setFilter?.accept === true;
    //   toast.success("yeeeeees");
    //   console.log("getUserReserve?.accept1",setFilter?.accept)
    // } if(select === sortOptions[1].label) {
    //   setFilter?.accept
    //   toast.error("nooooooo");
    //   console.log("getUserReserve?.accept2",setFilter?.accept)
    // }
  };

  return (
    <div>
      <Toaster />
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered"
              className="font-persian p-2 mt-4 flex">
            {select}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Dynamic Actions"
          onAction={(key) => {
            const selectSortOptions = sortOptions.find((e) => e.key === key);
            if (selectSortOptions) setSelect(selectSortOptions.label);
          }}
          >
          {sortOptions.map((value) => (
            <DropdownItem
            key={value.key}
            classNames={{ title: "font-persian text-end" }}
            onClick={handleAccept}
            >
              {value.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ReserveOrder;
