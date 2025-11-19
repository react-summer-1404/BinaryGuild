import React from 'react'
import moment from "moment-jalaali";
import { useTranslation } from "react-i18next";


const UserOtherInfo = ({usersDetails}) => {
  const { t } = useTranslation();

      const formatInsertDate = moment(usersDetails.insertDate).format("jYYYY/jMM/jDD");
      const formatBirthDate = moment(usersDetails.birthDay).format("jYYYY/jMM/jDD");
  
  return (
    <div  className=" flex gap-5 w-1/2 overflow-y-scroll absolute bg-[#252323]  z-100    ">
      <div className=' w-full flex gap-5 justify-between p-4  '>
      <div>
        <h2 className="text-start pb-2 text-2xl font-bold">{t("otherInfoOfUser")}</h2>
        <div className='flex items-center gap-4 mt-5'>
          <div className='border boredr-white w-10 h-10 rounded-full'><img src="" alt="" /></div>
          <div className='flex flex-col justify-center items-start'><p className='font-bold'>{t("aboutUser")}</p> <p className='text-small'>{usersDetails.userAbout ? <p className='font-bold'>{usersDetails.userAbout}</p> : <p>__</p> }</p> </div>
        </div>

        <div className='flex items-center gap-3 mt-6'>
          <div className='border boredr-white w-10 h-10 rounded-full'><img src="" alt="" /></div>
          <div className='flex flex-col justify-center items-start'><p className='font-bold'>{t("address")}</p> <p>{usersDetails.homeAdderess ?<p className='font-bold'>{usersDetails.homeAdderess}</p> : <p>__</p> }</p> </div>
        </div>

        <div className='flex items-center gap-3 mt-6'>
          <div className='border boredr-white w-10 h-10 rounded-full'><img src="" alt="" /></div>
          <div className='flex flex-col justify-center items-start'><p className='font-bold'>{t("birthDate")}</p> <p>{formatBirthDate ? <p className='font-bold'>{formatBirthDate}</p> : <p>__</p>}</p> </div>
        </div>

        
        <div className='flex items-center gap-3 mt-6'>
          <div className='border boredr-white w-10 h-10 rounded-full'><img src="" alt="" /></div>
          <div className='flex flex-col justify-center items-start'><p className='font-bold'>{t("creatingAccountDate")}</p> <p>{formatInsertDate ? <p className='font-bold'>{formatInsertDate}</p> : <p>__</p> }</p> </div>
        </div>  
        
        <div className='flex items-center gap-3 mt-6'>
          <div className='border boredr-white w-10 h-10 rounded-full'><img src="" alt="" /></div>
          <div className='flex flex-col justify-center items-start'><p className='font-bold'>{t("twoStepVerify")}</p> <p>{usersDetails.twoStepAuth ? t("active") : t("deActive")}</p> </div>
        </div>                       
        
        <div className='flex items-center gap-3 mt-6'>
          <div className='border boredr-white w-10 h-10 rounded-full'><img src="" alt="" /></div>
          <div className='flex flex-col justify-center items-start'><p className='font-bold'>{t("recoveryEmail")}</p> {usersDetails.recoveryEmail ? <p className='font-bold'>{usersDetails.recoveryEmail}</p> : <p>__</p> } </div>
        </div>   

        <div className='flex items-center gap-3 mt-6'>
          <div className='border boredr-white w-10 h-10 rounded-full'><img src="" alt="" /></div>
          <div className='flex flex-col justify-center items-start'><p className='font-bold'>{t("getEventMessage")}</p> <p>{usersDetails.receiveMessageEvent ? t("active") : t("deActive")}</p> </div>
        </div>          



      </div>


      <div>
        <h2 className="text-start pb-2 text-2xl font-bold">{t("socialMedia")}</h2>
        <div className='flex items-center gap-3 mt-4'>
          <div className='border boredr-white w-10 h-10 rounded-full'><img src="" alt="" /></div>
          <div className='flex flex-col justify-center items-start'><p>{t("telegram")}</p> <p>{usersDetails.telegramLink ? <p className='font-bold'>{usersDetails.telegramLink}</p> : <p>__</p>}</p> </div>
        </div>

        <div className='flex items-center gap-3 mt-4'>
          <div className='border boredr-white w-10 h-10 rounded-full'><img src="" alt="" /></div>
          <div className='flex flex-col justify-center items-start'><p>{t("linkedin")}</p> <p>{usersDetails.linkdinProfile ? <p className='font-bold'>{usersDetails.linkdinProfile}</p> : <p>__</p>}</p> </div>
        </div>

      </div>
      
      </div>

    </div>
  )
}

export default UserOtherInfo