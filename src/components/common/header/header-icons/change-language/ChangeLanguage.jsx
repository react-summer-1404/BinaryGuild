import React from "react";
import Language from "../../../../../core/utility/language/NumberOfLanguage";
import { Autocomplete, AutocompleteItem } from "@heroui/react";

const ChangeLanguage = () => {
  return (
    <Autocomplete
      className="max-w-xs"
      defaultItems={Language}
      label="عوض کردن زبان"
      placeholder="فارسی"
    >
      
    </Autocomplete>
  );
};

export default ChangeLanguage;
