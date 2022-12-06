import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";

import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  //   console.log(user.displayName);
  const signOutHandle = () => {
    logOut().then(() => {});
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="headerContainer">
          <Navbar.Brand>
            <Link to="/">Our Education</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/home">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/courses">Courses</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/blog"> Blogs</Link>
              </Nav.Link>

              <Nav.Link href="">FAQ</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                {user?.uid ? (
                  <>
                    <span> {user?.displayName}</span>
                    <Button onClick={signOutHandle}>Log Out</Button>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button>Login</Button>
                    </Link>
                    <Link to="/register">
                      <Button>Register</Button>
                    </Link>
                  </>
                )}
              </Nav.Link>
              <Nav.Link eventKey={2} href="">
                {user?.photoURL ? (
                  <>
                    <Image
                      style={{ height: "30px", width: "30px" }}
                      roundedCircle
                      src={user.photoURL}
                    />
                  </>
                ) : (
                  <FaUser style={{ height: "30px", width: "30px" }} />
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
