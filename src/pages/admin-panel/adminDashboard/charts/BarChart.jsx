import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";
import { useTranslation } from "react-i18next";




 function BarCharts({superAdmin,adminCount,teacherCount,studentCount}) {
  const { t } = useTranslation();

    const data = [
  { name: t("superAdmin"), value: superAdmin },
  { name: t("admin"), value: adminCount },
  { name: t("teacher"), value: teacherCount },
  { name: t("student"), value: studentCount },
];
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data} margin={{right:60, top:30}} >
        
        <XAxis dataKey="name" />
        <YAxis name="count" />
        {/* <Tooltip /> */}
        <Bar dataKey="value" fill="#1890ff" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarCharts
