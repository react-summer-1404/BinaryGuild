import React from "react";
import { Autocomplete, AutocompleteItem, Button } from "@heroui/react";
import { LANGUAGES } from "../../../../../core/utility/bilingual/LanguageData";
import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  return (
    //   <Autocomplete
    //     className="w-42 bg-background text-text"
    //     defaultItems={LANGUAGES}
    //     disabledKeys={["انگلیسی", "فارسی"]}
    //     label="عوض کردن زبان"
    //     placeholder="زبان ها"
    //   >
    //     {(value) => (
    //       <AutocompleteItem key={value.code}>{value.label}
    //       </AutocompleteItem>
    // )}
    //   </Autocomplete>
    <>
      <Button
        isIconOnly
        color="default"
        variant="faded"
        onPress={i18n.language === "fa" ? "font-IranSans" : "font-Pop_Med"}
        className="bg-boarder border-boarder text-text font-bold"
      >
        fa/en
      </Button>
    </>
  );
};

export default ChangeLanguage;
