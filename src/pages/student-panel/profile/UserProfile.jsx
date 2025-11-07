import React from 'react'
import { useTranslation } from 'react-i18next'

const UserProfile = () => {
  const {t} = useTranslation();
  return (
    <div>
      <h1>{t("MyProfile")}</h1>

    </div>
  )
}

export default UserProfile
