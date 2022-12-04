import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
const Login = () => {
  const { googleSign } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSign = () => {
    googleSign(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <h1> Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Link to="/register"> Please Register </Link>
      <div className="text-center">
        <Button onClick={handleGoogleSign}>Google sign</Button>
        <Button>Github sign</Button>
      </div>
    </div>
  );
};

export default Login;
