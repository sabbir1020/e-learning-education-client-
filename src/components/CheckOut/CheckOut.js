import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h1>{user.displayName} </h1>
      <h1>{user.email} </h1>
    </div>
  );
};

export default CheckOut;
