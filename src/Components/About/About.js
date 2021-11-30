import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { HashLink } from "react-router-hash-link";
import "./About.css";
const About = () => {
  return (
    <div className="about-bg">
      <Container id="about" className="py-5 text-light text-center">
        <Row>
          <Col xs={12} sm={12} md={5}>
            <Fade left>
              <img
                className="w-100 image"
                src="https://i.ibb.co/XS46svN/about-adobespark.png"
                alt=""
              />
            </Fade>
          </Col>
          <Col xs={12} sm={12} md={7}>
            <h1 className="mt-5 font">Md Zahangir Hossain</h1>
            <h4 className="mb-5">Frontend Web Developer</h4>
            <h6 className="mb-4">MERN Stack Enthusiast.</h6>
            <p className="">
              Working on personal projects focusing on Front End technologies.
              An intermediate React.js user, can intergrade necessary packages
              and handle them well. Learning server-side technologies like
              Node.js, Express.js, RESTful API’s as well as GraphQL. Next goal
              is to learn and apply Next.js and some testing frameworks like
              JEST. Meanwhile, looking for opportunities in an internship or a
              junior position in a company.
            </p>
            <Fade bottom>
              <div className="text-center my-5">
                <Button
                  href="https://github.com/zahangir710"
                  target="_blank"
                  download
                  className="me-4 px-4 responsive-margin"
                  variant="secondary"
                >
                  GitHub Profile
                </Button>
                <HashLink to="#projects">
                  <Button className="ms-4 px-5" variant="warning">
                    Projects
                  </Button>
                </HashLink>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default About;
