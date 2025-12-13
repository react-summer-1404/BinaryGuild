import { Select, SelectItem } from "@heroui/react";
import { useTranslation } from "react-i18next";
import CategoryImage from "../../../../core/icons/CategoryImage";

const CategorySection = ({ CategoryId , setFilter}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap w-11/12 m-auto">
      <div className="flex flex-nowrap w-full gap-2">
        <CategoryImage />
        <p className="text-text">{t("Category")}</p>
      </div>
      <div className="flex w-screen items-center m-auto">
        <Select
          className="max-w-xs my-5"
          classNames={{
            listboxWrapper: "bg-background text-text",
            label: "text-[12px] font-persian",
          }}
          onSelectionChange={(value) => {
            setFilter((prev) => ({
              ...prev,
              NewsCategoryId: value?.currentKey?.substring(2),
            }));
            console.log(value);
          }}
          isClearable={true}
          label={t("SelectCategory")}
        >
          {CategoryId?.map((value) => (
            <SelectItem
              key={value.key}
              classNames={{title:"font-persian" }}
            >
              {value.categoryName}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default CategorySection;
