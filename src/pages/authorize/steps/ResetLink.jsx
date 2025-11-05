import React from 'react'
import { useTranslation } from "react-i18next";
import { Button } from '@heroui/button';

const ResetLink = () => {
    const { t } = useTranslation();

  return (
    <div className='text-text mt-25 flex flex-col justify-center items-center'>
        <h2 className='font-[600] text-[#2F2F2F] text-[28px] '>{t("ResetHead")}</h2>
        <p className='mt-10 text-center'>{t("ResetDes")}</p>

       <Button className='mt-8 text-[#FCFCFC] bg-[#3772FF]'><a className='text-[#FCFCFC]' href='https://mail.google.com/mail' target='_blank' > {t("ResetLink")}</a></Button> 
    </div>
  )
}

export default ResetLink