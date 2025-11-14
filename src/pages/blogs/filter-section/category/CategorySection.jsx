import React from 'react'
import CategoryImage from '../../../../core/icons/CategoryImage'
import { useTranslation } from 'react-i18next'
import { Select, SelectItem } from '@heroui/react'

const CategorySection = ({NewsCategoryId}) => {
    const {t}=useTranslation()
  return (
    <div className='flex flex-wrap w-11/12 m-auto'>
      <div className='flex flex-nowrap w-full gap-2'>
        <CategoryImage/>
        <p className='text-text'>{t("Category")}</p>
      </div>
    <div className="flex w-screen items-center m-auto">
      <Select className="max-w-xs my-5" classNames={{listboxWrapper:"bg-background text-text" , label:"text-[10px] "}} isClearable={true} label={t("SelectCategory")}>
        {NewsCategoryId?.map((value) => (
          <SelectItem key={value.key} classNames={{wrapper:"bg-muted" , base:"bg-muted"}}>{value.techName}</SelectItem>
        ))}
      </Select>
    </div>
    </div>
  )
}

export default CategorySection
