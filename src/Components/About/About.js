import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { HashLink } from "react-router-hash-link";
const About = () => {
  return (
    <div className="bg-dark">
      <Container id="about" className="py-5 text-light text-center">
        <Row>
          <Col xs={12} md={6}>
            <img
              className="w-75"
              src="https://i.ibb.co/XS46svN/about-adobespark.png"
              alt=""
            />
          </Col>
          <Col xs={12} md={6}>
            <h1 className="mt-5">Md Zahangir Hossain</h1>
            <h3 className="mb-5">Frontend Web Developer</h3>
            <h5 className="mb-4">MERN stack enthusiast.</h5>
            <p className="px-5">
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
                  className="me-4 px-4"
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
