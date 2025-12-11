import { Button } from '@heroui/button';
import React from 'react'
import { useTranslation } from 'react-i18next';

const Finally = ({onPrevious}) => {
  const { t } = useTranslation();
  const handelReturn = () => {
    try {
      onPrevious();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='w-full flex gap-4 flex-wrap'>
      <div className="w-[12%] ">
        <p
          onClick={handelReturn}
          className="text-start flex gap-1 text-[10px] mt-[220%] text-white font-persian"
        >
          <img src="/src/assets/icons/back-arrow.png" className="mt-0.5 size-4" />
          {t("PreviousStage")}
        </p>
      </div>
        <img src="/src/assets/icons/yesss.svg" className='mt-15 w-3/4 size-40'/>
        <p className='w-10/12 m-auto text-center text-white font-persian '> {t("PaymentSuccessfully")} </p>
        <div className='w-10/12 m-auto'>
        <Button className='bg-white font-bold m-auto text-black'> {t("Close")} </Button></div>

      
    </div>
  )
}

export default Finally
