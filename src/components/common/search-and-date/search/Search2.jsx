import { useTranslation } from "react-i18next";
import { useMemo, useState } from "react"
import SearchImage from "../../../../core/icons/SearchImage";

const Search2 = () => {
  const { t } = useTranslation();
  // const [placeHolder, setPlaceHolder] = useState(t("SearchCourses"))
  // const handlePlaceHolder = (e)=>{
  //   const value = e.target.value
  //   setPlaceHolder(value)
  // }

  // const searchBox = (placeHolder == "" || placeHolder == String || placeHolder == string )=>{}
// const searchBox = ( placeHolder == "SearchCourses", placeHolder== String ,  placeHolder == string)=> {
//   const filteredArray = useMemo(() =>
//     array.filter(entry => {
//       if (search === "") return entry
//       else if (entry[field].toLocaleLowerCase()
//         .includes(search.toLocaleLowerCase())) return entry
//     })
//     , [array, search])
// }

	
	
  return (
    <div className="flex flex-wrap w-full gap-4">
      <div className="flex w-full justify-start gap-2 mr-1 ml-1">
        <SearchImage />
        <p className="text-text font-persian">{t("Search")}</p>
      </div>
      <div className="w-11/12 m-auto">
        <input
          id="search"
          type="text"
          className="text-[12px] font-persian text-text w-full border-gray-0 border-1 p-2 rounded-4xl bg-forgetpassbtn"
          // placeholder={placeHolder}
          // onChange={searchBox}
          
        />
      </div>
    </div>
  );
};

export default Search2;