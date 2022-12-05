import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courses = useLoaderData();
  const { _id, picture, price, courseName, description } = courses;
  console.log(courses);
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
          <Card.Text>{description}</Card.Text>
          <Button variant="">
            {/* <Link to={`/courses/${_id}`}>Get premium access</Link> */}
            <Link>Get premium access</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetails;
