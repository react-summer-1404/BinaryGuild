import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDebounce } from "use-debounce";
import SearchImage from "../../../../core/icons/SearchImage";

const Search = ({ setFilter }) => {
  const { t } = useTranslation();
  const [query, setQuery] = useState();
  const [value] = useDebounce(query, 1000);

  useEffect(() => {
    console.log('value',typeof value,'query', typeof query)
    if (value !==undefined) {
      setFilter((prev) => ({ ...prev, Query: value }));
    }
  }, [value]);

  return (
    <div className="flex flex-wrap w-full gap-4">
      <div className="flex w-full justify-start gap-2 mr-1 ml-1">
        <SearchImage/>
        <p className="text-text font-persian">{t("Search")}</p>
      </div>
      <div className="w-11/12 m-auto">
        <input
          type="search"
          className="text-[12px] font-persian text-text w-full border-gray-0 border-1 p-2 rounded-4xl bg-forgetpassbtn"
          value={query}
          placeholder={t("SearchCourses")}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
