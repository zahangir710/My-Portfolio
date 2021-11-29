import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import "./Profile.css";
const Profile = () => {
  return (
    <Container id="home">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <div className="text-center d-flex justify-content-center margin">
            <div>
              <Fade left>
                <img
                  className="width rounded"
                  src="https://i.ibb.co/n0jKdM9/profile.jpg"
                  alt="my profile"
                />
              </Fade>
            </div>
            <Fade top>
              <div className="text-start ms-3 mt-4">
                <h3 className="mb-2">Hossain</h3>
                <h4>Md Zahangir</h4>
              </div>
            </Fade>
          </div>
          <div className="d-flex justify-content-center">
            <Bounce right>
              <div className="set-position rounded">
                <h6 className="lh-md mt-1">Frontend Developer</h6>
              </div>
            </Bounce>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
