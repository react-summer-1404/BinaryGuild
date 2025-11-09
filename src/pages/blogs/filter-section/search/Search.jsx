import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchImage from "../../../../core/icons/SearchImage";
import { useDebounce } from "use-debounce";

const Search = ({ setFilter }) => {
  const { t } = useTranslation();
  const [query, setQuery] = useState();
  const [value] = useDebounce(query, 1000);

  useEffect(() => {
    if (value!==undefined) {
      setFilter((prev) => ({ ...prev, Query: value }));
    }
  }, [value]);

  return (
    <div className="flex flex-wrap w-11/12 m-auto">
      <div className="flex w-full justify-start">
        <SearchImage/>
        <p>{t("Search")}</p>
      </div>
      <div className="w-11/12 m-auto">
        <input
          type="search"
          className="text-black-900"
          value={query}
          placeholder={t("SearchCourses")}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
