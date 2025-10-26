import React from 'react'

const ProfessorsBackground = ({image ,name , medal , score}) => {
  return (
    <div className='flex flex-wrap w-full lg:hidden lg:w-1/2 justify-center p-7 gap-2 z-40'>
      <img src={image} />
      <div className='flex flex-nowrap justify-center w-full m-auto'>
        <h2 className='text-gray-100 text-end font-bold font-persian text-2xl w-8'>{score}</h2>
        <img src={medal}/>
      </div>
      <p className='text-gray-100 font-bold font-persian'>{name}</p>
    </div>
  )
}

export default ProfessorsBackground
