import React from 'react'
import CategoryImage from '../../../../core/icons/CategoryImage'
import { useTranslation } from 'react-i18next'
import { Select, SelectItem } from '@heroui/react'

const CategorySection = ({ListTech}) => {
    const {t}=useTranslation()
  return (
    <div className='w-11/12 flex flex-wrap m-auto'>
      <div className='flex flex-nowrap w-full gap-2'>
        <CategoryImage/>
        <p>{t("Category")}</p>
      </div>
    <div className="flex w-screen items-center">
      <Select className="max-w-xs my-5" isClearable={true} label={t("SelectCategory")}>
        {ListTech?.map((value) => (
          <SelectItem key={value.key}>{value.techName}</SelectItem>
        ))}
      </Select>
    </div>
    </div>
  )
}

export default CategorySection
