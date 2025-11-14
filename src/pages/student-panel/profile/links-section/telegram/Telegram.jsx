import React from 'react'
import { useTranslation } from 'react-i18next';

const Telegram = ({getLinks}) => {
  const { t } = useTranslation();
  return (
    <div className="w-11/12 flex flex-wrap">
      <p className="font-bold w-11/12 m-auto mr-2 ml-2 text-right">
        {t("Telegram")}
      </p>
      <input
        type="text"
        className="border-1 mr-2 ml-2 border-boarder text-[12px] p-4 font-bold w-11/12 m-auto mt-2 rounded-3xl text-muted"
        placeholder={t("TelegramLink")}
        // onChange={(e)=> getLinks?}
      />
    </div>
  )
}

export default Telegram