import React from 'react'

const TopBlogs = ({item}) => {

  const {currentImageAddress , title} = item
  return (
    <div className='flex flex-wrap w-1/3 gap-2'>
      <img src={currentImageAddress} className="w-11/12 m-auto" />
      <div className='w-11/12 m-auto'>
        <h2 className="text-2xl text-start text-text">{title}</h2>
      </div>
    </div>
  )
}

export default TopBlogs

