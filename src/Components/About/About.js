import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { HashLink } from "react-router-hash-link";
import Particles from "react-tsparticles";
import Navigation from "../Navigation/Navigation";
import "./About.css";
const About = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="about-bg">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 50,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <Container
        id="about"
        className="pb-5 text-light text-center overflow-hidden"
      >
        <Navigation></Navigation>
        <Row className="gx-0">
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
            <Fade top>
              <h1 className="mt-5 font">Md Zahangir Hossain</h1>
              <h4 className="mb-5">Frontend Web Developer</h4>
            </Fade>
            <h6 className="mb-4">MERN Stack Enthusiast.</h6>
            <p className="">
              Working on personal projects focusing on Front End technologies.
              An intermediate React.js user, can intergrade necessary packages
              and handle them well. Learning server-side technologies like
              Node.js, Express.js, RESTful API's as well as GraphQL. Next goal
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
      <svg
        className="custom-margin d-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 318"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,320L80,314.7C160,309,320,299,480,256C640,213,800,139,960,122.7C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
export default About;
