import React from 'react'

const TopBlogs = ({item}) => {

  const {currentImageAddress , title} = item
  return (
    <div className='flex flex-wrap gap-2 w-1/3'>
      <img src={currentImageAddress} onError={(e)=>{e.target.src="/src/assets/images/script.png"}} className="w-11/12 m-auto" />
      <div className='w-11/12 m-auto'>
        <h2 className="text-2xl text-start text-text">{title}</h2>
      </div>
    </div>
  )
}

export default TopBlogs

