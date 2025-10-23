import React from "react";
import Language from "../../../../../core/utility/language/NumberOfLanguage";
import { Autocomplete, AutocompleteItem } from "@heroui/react";

const ChangeLanguage = () => {
  return (
    <Autocomplete
      className="max-w-xs"
      defaultItems={Language}
      disabledKeys={["انگلیسی", "فارسی"]}
      label="عوض کردن زبان"
      placeholder="زبان ها"
    >
      {(value) => <AutocompleteItem key={value.key}>{value.label}</AutocompleteItem>}
    </Autocomplete>
  );
};

export default ChangeLanguage;
