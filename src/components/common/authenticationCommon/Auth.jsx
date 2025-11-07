import React from 'react'
import { useTranslation } from "react-i18next";


const Auth = () => {
    const { t } = useTranslation();

  return (
    <div className='flex flex-col h-full justify-between'>
        <div className='flex'>
          <img src="/src/assets/images/Untitled-1 4.svg"/>
          <img src="/src/assets/images/Untitled-1 3.svg"/>
        </div>
        <div className='text-right text-black'>
          <h2 className='text-text font-bold text-3xl'> {t("AuthTitle")} </h2>
          <p className='text-muted mt-4 mb-4 m-l-0 m-r-0 text-xl font-bold'>{t("AuthDescription")} </p>
        </div>
        <div className='flex justify-center'>
          <img src="/src/assets/images/3d-hygge-top-view-of-laptop-glasses-cup-of-coffee-headphones-1 1.png" className='w-85 h-auto'/>
        </div>
    </div>
  )
}

export default Auth