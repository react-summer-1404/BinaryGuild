import React from 'react'
import { useTranslation } from 'react-i18next';

const Linkedin = ({getLinks}) => {
  const { t } = useTranslation();
  return (
    <div className="w-11/12 flex flex-wrap">
      <p className="font-bold w-11/12 m-auto mr-2 ml-2 text-right">
        {t("LinkedIn")}
      </p>
      <input
        type="text"
        className="border-1 mr-2 ml-2 border-boarder text-[12px] p-4 font-bold w-11/12 m-auto mt-2 rounded-3xl text-muted"
        placeholder={t("LinkedInLink")}
      />
    </div>
  )
}

export default Linkedin