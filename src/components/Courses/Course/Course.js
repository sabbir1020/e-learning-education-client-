import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const Course = ({ course }) => {
  const { _id, picture, price, courseName, description } = course;
  console.log(course);
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          style={{ width: "260px", height: "260px" }}
          src={picture}
        />
        <Card.Body>
          <Card.Title>{courseName}</Card.Title>
          <Card.Text>
            {description.length > 100 ? (
              <p>
                {description.slice(0, 100) + "..."}
                <Link to={`/courses/${_id}`}> Read More</Link>
              </p>
            ) : (
              <p>{description}</p>
            )}
          </Card.Text>
          <Button variant="">
            <Link to={`/courses/${_id}`}>Course Details </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;
