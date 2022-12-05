import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { Col, Container, Image, Row } from "react-bootstrap";
import phoneAppImg from "../../../image/google-play-icon.webp";
import iPhoneAppImg from "../../../image/ios-store-icon.webp";

const Footer = () => {
  return (
    <div className="footer-container">
      <Container>
        <Row className="footer-row">
          <Col lg-4>
            <div>
              <h4 className="">Our Learning Website </h4>
              <h5>Download our mobile app</h5>
              <div className="d-flex col gap-4">
                <Image src={phoneAppImg}></Image>
                <Image src={iPhoneAppImg}></Image>
              </div>
            </div>
          </Col>
          <Col lg-4>
            <h3>Website Activities</h3>
            <div className="d-flex ">
              <ul>
                <li> Courses</li>
                <li> Blog</li>
                <li> Offers</li>
              </ul>
              <ul>
                <li> Courses</li>
                <li> Blog</li>
                <li> Offers</li>
              </ul>
            </div>
          </Col>
          <Col lg-4>
            <h4>Our communication medium</h4>
            <h5>Contact:- +01254641</h5>
            <h5>
              Email:<span> ourCourse@gamil.com</span>
            </h5>
            <div>
              <FaFacebook
                style={{ width: "30px", height: "30px" }}
                className="ms-3   bg-dark text-white  "
              ></FaFacebook>
              <FaInstagram
                style={{ width: "30px", height: "30px" }}
                className="ms-3  bg-dark text-white "
              ></FaInstagram>
              <FaTwitter
                style={{ width: "30px", height: "30px" }}
                className="ms-3  bg-dark text-white "
              ></FaTwitter>
              <FaTiktok
                style={{ width: "30px", height: "30px" }}
                className="ms-3   bg-dark text-white "
              ></FaTiktok>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
