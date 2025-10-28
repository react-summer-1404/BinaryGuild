import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../../../../core/utility/language/Language";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const ChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="w-full flex-col hidden md:inline-block">
        <Autocomplete
          className="w-26 text-text"
          defaultItems={LANGUAGES}
          disabledKeys={["انگلیسی", "فارسی"]}
          placeholder="زبان ها"
          onSelectionChange={ChangeLanguage}
        >
          {(lng) => (
            <AutocompleteItem key={lng.code} className="bg-boarder text-text">
              {lng.label}
            </AutocompleteItem>
          )}
        </Autocomplete>
      </div>
    </>
  );
};

export default LanguageSelector;
