import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaRegLightbulb } from "react-icons/fa";
import "./Skills.css";
const Skills = () => {
  return (
    <Container id="skills" className="text-center my-5">
      <FaRegLightbulb className="text-warning fs-1 text-center" />
      <h3 className="mb-5 mt-3">Skills</h3>
      <Row className="g-5">
        <Col xs={12} sm={6} md={3}>
          <div className="skills-bg">
            <h4 className="mb-4">Comfortable</h4>
            <p>JavaScript</p>
            <p>ES6</p>
            <p>React.js</p>
            <p>DOM manipulation</p>
            <p>HTML5</p>
            <p>CSS</p>
            <p>Bootstrap</p>
            <p>Tailwind</p>
            <p>Firebase</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div className="skills-bg">
            <h4 className="mb-4">Familar</h4>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>TypeScript</p>
            <p>C</p>
            <p>Python</p>
            <p>MongoDB</p>
            <p>RESTful API</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div className="skills-bg">
            <h4 className="mb-4">Learning</h4>
            <p>Next.js</p>
            <p>GraphQL</p>
            <p>Material UI</p>
            <p>JEST</p>
            <p>Docker</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div className="skills-bg">
            <h4 className="mb-4">Tools</h4>
            <p>Github</p>
            <p>Git</p>
            <p>VsCode</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
