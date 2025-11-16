import React from 'react'
import moment from "moment-jalaali";


const UserOtherInfo = ({usersDetails}) => {

      const formatInsertDate = moment(usersDetails.insertDate).format("jYYYY/jMM/jDD");
      const formatBirthDate = moment(usersDetails.birthDay).format("jYYYY/jMM/jDD");
  
  return (
    <div  className=" flex gap-5 w-1/2  h-170 overflow-y-scroll absolute bg-[#252323]  z-100    ">
      <div className=' w-full flex gap-5 justify-between p-4  '>
      <div>
        <h2>other info</h2>
        <div className='flex items-center gap-3 mt-4'>
          <div className='border boredr-white w-10 h-10 rounded-full'><img src="" alt="" /></div>
          <div className='flex flex-col justify-center items-start'><p>about user</p> <p>{usersDetails.userAbout}</p> </div>
        </div>

        <div className='flex items-center gap-3 mt-4'>
          <div className='border boredr-white w-10 h-10 rounded-full'><img src="" alt="" /></div>
          <div className='flex flex-col justify-center items-start'><p>address</p> <p>{usersDetails.homeAdderess}</p> </div>
        </div>

        <div className='flex items-center gap-3 mt-4'>
          <div className='border boredr-white w-10 h-10 rounded-full'><img src="" alt="" /></div>
          <div className='flex flex-col justify-center items-start'><p>birth date</p> <p>{formatBirthDate}</p> </div>
        </div>

        
        <div className='flex items-center gap-3 mt-4'>
          <div className='border boredr-white w-10 h-10 rounded-full'><img src="" alt="" /></div>
          <div className='flex flex-col justify-center items-start'><p>insert date</p> <p>{formatInsertDate}</p> </div>
        </div>  
        
        <div className='flex items-center gap-3 mt-4'>
          <div className='border boredr-white w-10 h-10 rounded-full'><img src="" alt="" /></div>
          <div className='flex flex-col justify-center items-start'><p>2 step recovery code</p> <p>{usersDetails.twoStepAuth ? "right" : "false"}</p> </div>
        </div>                       
        
        <div className='flex items-center gap-3 mt-4'>
          <div className='border boredr-white w-10 h-10 rounded-full'><img src="" alt="" /></div>
          <div className='flex flex-col justify-center items-start'><p>recovery gmail</p> <p>{usersDetails.recoveryEmail}</p> </div>
        </div>   

        <div className='flex items-center gap-3 mt-4'>
          <div className='border boredr-white w-10 h-10 rounded-full'><img src="" alt="" /></div>
          <div className='flex flex-col justify-center items-start'><p>event message</p> <p>{usersDetails.receiveMessageEvent ? "faal" :"not faal"}</p> </div>
        </div>          



      </div>


      <div>
        <h2>social media</h2>
        <div className='flex items-center gap-3 mt-4'>
          <div className='border boredr-white w-10 h-10 rounded-full'><img src="" alt="" /></div>
          <div className='flex flex-col justify-center items-start'><p>telegram</p> <p>{usersDetails.telegramLink}</p> </div>
        </div>

        <div className='flex items-center gap-3 mt-4'>
          <div className='border boredr-white w-10 h-10 rounded-full'><img src="" alt="" /></div>
          <div className='flex flex-col justify-center items-start'><p>linkedin</p> <p>{usersDetails.linkdinProfile}</p> </div>
        </div>

      </div>
      
      </div>

    </div>
  )
}

export default UserOtherInfo