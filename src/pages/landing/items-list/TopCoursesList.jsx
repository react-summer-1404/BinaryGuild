import React, { useEffect, useState } from 'react'
import TopCourses from '../landings-sections/TopCourses';

const TopCoursesList = () => {
  const [courses , setCourses] = useState()

  const fetchCourses = async(count) => {
    const response = await fetch(`/Home/GetCoursesTop${count ==4}`);
    const courses = await response.json();
    setCourses(courses); 
  }
    
  useEffect(() => {
    fetchCourses();
  },[])

  return (
    <div>
      {courses.map((value)=>{
        <TopCourses key={value.id} {...value}/>
      })}
      
    </div>
  )
}

export default TopCoursesList
