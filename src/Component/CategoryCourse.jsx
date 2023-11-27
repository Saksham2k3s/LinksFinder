import React from "react";
import CategoryData from "../Data/CategoryData.json";
import CourseCard from "./CourseCard";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
function CategoryCourse() {
  const [courses, setCourses] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    const filteredCourses = CategoryData.filter(
      (course) => category === course.category
    );
    setCourses(filteredCourses);
  }, [category]);

  return (
    <>
      <div className="container">
        <div className="row">
          {courses.map((course, idx) => (
            <div className="col-md-4" key={idx}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryCourse;
