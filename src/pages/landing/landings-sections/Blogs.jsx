import React from 'react'

const TopBlogs = ({item}) => {

  const {currentImageAddress , title} = item
  return (
    <div className='flex flex-wrap w-1/3'>
      <img src={currentImageAddress} className="w-11/12 m-auto" />
      <div>
        <h2 className="text-2xl text-start text-text">{title}</h2>
      </div>
    </div>
  )
}

export default TopBlogs

