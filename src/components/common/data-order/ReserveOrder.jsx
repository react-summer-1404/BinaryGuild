import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const ReserveOrder = ({setFilter}) => {
  const { t } = useTranslation();
  const sortOptions = [
    { key: "confirmed", label: t("Confirmed") },
    { key: "notConfirmed", label: t("NotConfirmed") },
  ];
  const [select, setSelect] = useState(sortOptions[0].label);

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
            classNames={{ title: "font-persian text-text text-end",description:"bg-red" }}
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
