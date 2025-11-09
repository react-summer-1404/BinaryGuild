import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Outlet } from 'react-router-dom';

const UserProfile = () => {
  const {t} = useTranslation();
  return (
    <div className='w-11/12 m-auto'> 
      <p className='w-1/3 m-auto font-bold'>{t("MyProfile")}</p>
      <div>
        <Link to={""}>
          <p>{t("Information")}</p>
        </Link>
        <Link to={""}>
          <p>{t("images")}</p>
        </Link>
        <Link to={""}>
          <p>{t("HomeAddress")}</p>
        </Link>
        <Link to={""}>
          <p>{t("Links")}</p>
        </Link>
      </div>
      
      <Outlet/>

    </div>
  )
}

export default UserProfile
