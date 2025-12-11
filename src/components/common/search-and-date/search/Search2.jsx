import { useTranslation } from "react-i18next";
import SearchImage from "../../../../core/icons/SearchImage";

const Search2 = () => {
  const { t } = useTranslation();


// function search(){
// 	getUserReserve.className = "show";
// 	getUserReserve.className = "show";
	
// 	var filteredData = getUserReserve.filter(function (el) {
// 										  return el.title.indexOf(getUserReserve.courseName.value)	!= -1 && getUserReserve.courseName.value!=''									 
// 										});
// 	var filteredData2 = favoriteBlogsTitle.filter(function (el) {
// 										  return el.title.indexOf(favoriteBlogsTitle.courseName.value)	!= -1 && favoriteBlogsTitle.value!=''									 
// 										});
// 	var filteredData3 = favoriteCoursesTitle.filter(function (el) {
// 										  return el.title.indexOf(favoriteCoursesTitle.courseName.value)	!= -1 && favoriteCoursesTitle.value!=''									 
// 										});
									
// 	fill_search(filteredData);
// 	fill_search(filteredData2);	
// 	fill_search(filteredData3);
// }
	
	
// function fill_search(jsonData){
// 	getUserReserve.courseName.innerHTML = "";

// 	for(let i=0; i<jsonData.length;i++){
	 
// 		let sr = document.createElement('div');
	 
// 		let pic = document.createElement('img');
// 		pic.src = "images/books/" + jsonData[i].pic[0];

// 		let title = document.createElement('span');
// 		title.innerHTML = jsonData[i].title;
		
// 		sr.appendChild(pic);
// 		sr.appendChild(title);	

// 		getUserReserve.courseName.appendChild(sr);
// 	}
// }	
  // const handleSearch = ()=>{
  //   const searched = getUserReserve?.filter((value)=>{if (value.courseName) {
  //     return value.courseName?.indexOf(value.courseName)	!= -1 && value.courseName!=''
  //   }})
  //   return searched
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
          placeholder={t("SearchCourses")}
          
        />
      </div>
    </div>
  );
};

export default Search2;