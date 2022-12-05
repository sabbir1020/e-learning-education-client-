import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../../Courses/Course/Course";

const Home = () => {
  const courses = useLoaderData();
  // const { _id, picture, price, courseName } = courses;
  return (
    <div className="courses-container">
      {courses.map((course) => (
        <Course course={course}></Course>
      ))}
    </div>
  );
};

export default Home;
