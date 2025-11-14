import instance from "../../interceptor";

// Add profile information
export const AddProfileInfo = ({params})=> {
  return instance.put("/SharePanel/UpdateProfileInfo"
    , {params:{...params}}
  )
};
console.log( "AddProfileInfo",AddProfileInfo)