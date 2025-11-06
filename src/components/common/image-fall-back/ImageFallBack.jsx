import React from 'react'
import instance from '../../../core/services/interceptor'


const ImageFallBack = () => {
  const ImageFallBack = ()=>{
    if(instance.response === "" & "null" & "" ){
      <img src=''/>
    }else{
      instance.response();
    }
  }
  
  return (
    <div>
      
    </div>
  )
}

export default ImageFallBack
