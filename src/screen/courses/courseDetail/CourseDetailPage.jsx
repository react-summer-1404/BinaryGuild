import React from 'react'
import CourseHeader from '../../../pages/courseDetail/CourseHeader'
import CourseDescription from '../../../pages/courseDetail/CourseDescription'
import CourseComments from '../../../pages/courseDetail/CourseComments'
import RelatedCourses from '../../../pages/courseDetail/RelatedCourses'
export const CourseDetailPage = () => {

  return (
    <div className='w-351 bg-background text-text rtl:text-right mt-14 '>
      <CourseHeader/>
      <CourseDescription/>
      <CourseComments/>
      <RelatedCourses/>
    </div>
  )
}
