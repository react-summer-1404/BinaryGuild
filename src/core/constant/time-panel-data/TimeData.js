import moment from "moment-jalaali";


  const date = JSON.parse(localStorage.getItem("data"));
  const formatInsertDate1 = moment(date?.insertDate).format("jYYYY/jMM/jDD");
  const formatInsertDate2 = moment(date?.insertDate).format("HH:mm:ss");
  console.log('date?.insertDate',date?.insertDate,formatInsertDate2)
const TimeData = [
  { id: 1, name: "", image: "/src/assets/icons/time-02.svg", description: formatInsertDate2 },
  { id: 2, name: "", image:"/src/assets/icons/calendar-1.png", description: formatInsertDate1 },
];
export default TimeData