import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../../LeftSideNav/LeftSideNav";
import Course from "../Course/Course";
import "./Courses.css";
const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="courses">
      <div>
        {courses.map((course) => (
          <LeftSideNav course={course}></LeftSideNav>
        ))}
      </div>
      <div className="courses-container">
        {courses.map((course) => (
          <Course course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
