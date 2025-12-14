import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const BlogsOrder = () => {
  const { t } = useTranslation();
  const sortOptions = [
    { key: "new", label: t("New") },
    { key: "popular", label: t("Popular") },
  ];
  const [select, setSelect] = useState(sortOptions[0].label);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="font-persian text-text p-2 flex">
          {select}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dynamic Actions"
        className="text-text"
        onAction={(key) => {
          const selectSortOptions = sortOptions.find((e) => e.key === key);
          if (selectSortOptions) setSelect(selectSortOptions.label);
        }}
        classNames={{ base: "bg-red" }}
      >
        {sortOptions.map((value) => (
          <DropdownItem
            key={value.key}
            classNames={{ title: "font-persian text-text text-end" }}
          >
            {value.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default BlogsOrder;
