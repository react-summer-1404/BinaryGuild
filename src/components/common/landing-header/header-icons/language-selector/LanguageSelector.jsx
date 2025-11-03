import {
  Autocomplete,
  AutocompleteItem,
  Select,
  SelectItem,
} from "@heroui/react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../../../../core/utility/language/Language";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const ChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="w-full flex-col hidden md:inline-block ">
        <Select
          className="max-w-xs w-26 text-text"
          items={LANGUAGES}
          placeholder="Languages"
          onSelectionChange={ChangeLanguage}
          classNames={{trigger:"bg-boarder hover:bg-boarder"}}
        >
          {(lng) => <SelectItem key={lng.code} className="bg-boarder  text-text">{lng.label}</SelectItem>}
        </Select>
      </div>
    </>
  );
};

export default LanguageSelector;
