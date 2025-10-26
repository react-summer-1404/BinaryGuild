import instance from "../../interceptor";

export const GetCourse =(CourseId)=>{
    return instance.get("/Home/GetCourseDetails",{
        params :{CourseId}
    })
}