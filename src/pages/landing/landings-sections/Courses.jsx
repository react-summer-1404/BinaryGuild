import React from 'react'

const Courses = () => {
  return (
    <div>
      <div className="courses-page">
        <h2>شروع ماجراجویی جدید</h2>
        <p className="subtitle"> دوره های پیشنهادی برای شما</p>

        <div className="courses-page">
          {courseList.map((course) => (
            <div
              key={course.id}
              className="courses-card"
              style={{ backgroundColor: course.color }}

            >
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p>مدرس:{course.teacher}</p>
              <span>{course.price} تومان</span>
              <button>مشاهده جزئیات</button>

            </div>

          ))}
        </div>


      </div>

    </div>
  )
}

export default Courses
