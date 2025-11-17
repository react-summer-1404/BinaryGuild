import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";



 function BarCharts({superAdmin,adminCount,teacherCount,studentCount}) {

    const data = [
  { name: "ادمین اصلی", value: superAdmin },
  { name: "ادمین", value: adminCount },
  { name: "استاد", value: teacherCount },
  { name: "دانشجو", value: studentCount },
];
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data} margin={{right:60, top:30}} >
        
        <XAxis dataKey="name" />
        <YAxis name="count" />
        <Tooltip />
        <Bar dataKey="value" fill="#1890ff" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarCharts
