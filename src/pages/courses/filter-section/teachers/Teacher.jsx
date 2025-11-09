import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useTranslation } from 'react-i18next';
import TeacherImage from '../../../../core/icons/TeacherImage';
import { Select, SelectItem } from '@heroui/react';
import { GetCoursesTeacher } from '../../../../core/services/api/get-data';

const Teacher = ({setFilter}) => {
  const { data: teacherData } = useQuery({
    queryKey: ["GET_TEACHER_ID"],
    queryFn: GetCoursesTeacher,
  });
  const { t } = useTranslation();
  return (
    <div className="w-11/12 flex flex-wrap m-auto gap-4">
      <div className="flex flex-nowrap w-full gap-2">
        <TeacherImage />
        <p className="text-text">{t("Teachers")}</p>
      </div>
      <div className="flex w-screen items-center">
        <Select
          className="w-full text-[12px]"
          isClearable={true}
          onSelectionChange={(value)=>{setFilter((prev) => ({
              ...prev,
              TeacherId: value?.currentKey?.substring(2)
            }))
            console.log("teach", value?.currentKey?.substring(2))
        }}
            
          label={t("SelectTeachers")}
        >
          {teacherData?.map((value) => (
            <SelectItem className="bg-gray-0 text-text" key={value.key}>
              {value.teacherId}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
}

export default Teacher
