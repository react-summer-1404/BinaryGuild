
//src/components/CourseCard.jsx
import React from "react";
import "./CourseCard.css";

const CourseCard = ({title, teacher, price, image}) => {

  return(
    <div className="course-card">
     <img src="{image}" alt="{title}" className="course-image" />
     <h3>{title}</h3>
     <p>{teacher} </p>
     <span>{price.toLocaleString}تومان</span>

    </div>


  );


};

export default CourseCard;