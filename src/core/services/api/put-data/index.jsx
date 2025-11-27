import instance from "../../interceptor";

// Add profile information
export const AddProfileInfo = ()=> {
  return instance.put("/SharePanel/UpdateProfileInfo"
  )
};
console.log( "AddProfileInfo",AddProfileInfo)