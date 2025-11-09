import React from 'react'
import HomeButton from '../button/HomeButton'
import { useTranslation } from 'react-i18next'

const NotFound = () => {
    const {t} = useTranslation();
  return (
    <div>
        <h1>404</h1>
        <p>{t("Error")}</p>
        <HomeButton/>
    </div>
  )
}

export default NotFound
