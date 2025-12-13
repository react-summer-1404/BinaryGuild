import { Select, SelectItem } from "@heroui/react";
import { useTranslation } from "react-i18next";
import CategoryImage from "../../../../core/icons/CategoryImage";

const CourseCategorySection = ({ ListTech, setFilter }) => {
  const { t } = useTranslation();
  return (
    <div className="w-11/12 flex flex-wrap m-auto gap-4">
      <div className="flex flex-nowrap w-full gap-2">
        <CategoryImage />
        <p className="text-text">{t("Category")}</p>
      </div>
      <div className="flex w-screen items-center">
        <Select
          className="w-full text-[12px]"
          isClearable={true}
          classNames={{
            listboxWrapper: "bg-background text-text",
            label: "text-[12px] font-persian",
          }}
          onSelectionChange={(value) => {
            setFilter((prev) => ({
              ...prev,
              ListTech: value?.currentKey?.substring(2),
              TechCount: value?.currentKey ? 1 : undefined,
            }));
            console.log(value);
          }}
          label={t("SelectCategory")}
        >
          {ListTech?.map((value) => (
            <SelectItem classNames={{ title: "font-persian" }} key={value.key}>
              {value.techName}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default CourseCategorySection;
