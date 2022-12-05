import React from "react";
import { Link } from "react-router-dom";

const LeftSideNav = ({ course }) => {
  const { courseName, _id } = course;
  return (
    <div>
      <Link to={`/courses/${_id}`}>{courseName}</Link>
    </div>
  );
};

export default LeftSideNav;
