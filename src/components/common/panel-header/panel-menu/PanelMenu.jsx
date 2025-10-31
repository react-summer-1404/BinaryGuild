import React from 'react'

const PanelMenu = ({image , name}) => {
  return (
    <div className='flex flex-wrap p-2'>
      <img src={image} className='pr-1 pl-1'/>
      <p className='font-persian text-[18px] pr-1 pl-1 hover:text-blue cursor-pointer'>{name}</p>
    </div>
  )
}

export default PanelMenu
