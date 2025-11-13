import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchImage from "../../../../core/icons/SearchImage";
import { useDebounce } from "use-debounce";

const Search = ({ setFilter }) => {
  const { t } = useTranslation();
  const [query, setQuery] = useState();
  const [value] = useDebounce(query, 1000);

  useEffect(() => {
    console.log('value',typeof value,'query', typeof query)
    if (value !==undefined) {
      setFilter((prev) => ({ ...prev, Query: value }));
    }
  }, [value,query,setFilter]);

  return (
    <div className="flex flex-wrap w-11/12 m-auto gap-4">
      <div className="flex w-full justify-start gap-2 mr-1 ml-1">
        <SearchImage/>
        <p className="text-text">{t("Search")}</p>
      </div>
      <div className="w-11/12 m-auto">
        <input
          type="search"
          className="text-[12px] text-text w-full border-gray-0 border-1 p-2 rounded-4xl bg-forgetpassbtn"
          value={query}
          placeholder={t("SearchCourses")}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
