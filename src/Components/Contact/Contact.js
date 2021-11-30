import React, { useRef, useState } from "react";
import Bounce from "react-reveal/Fade";
import emailjs from "emailjs-com";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Toast,
} from "react-bootstrap";
const Contact = () => {
  const [isToast, setIsToast] = useState(false);
  const handleCloseToast = () => {
    setIsToast(false);
  };
  const form = useRef();
  const sendEmail = (e) => {
    setIsToast(false);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wh1ci09",
        "template_gbguqxb",
        form.current,
        "user_KNhQcQ2x33aAvi4lH9Vpq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsToast(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Container id="contact">
      <Form ref={form} onSubmit={sendEmail}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h4 className="text-center mt-5 mb-4">Contact Me</h4>
            <FloatingLabel label="Name" className="mb-3">
              <Form.Control
                required
                type="text"
                name="name"
                placeholder="Name"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Subject"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Message">
              <Form.Control
                as="textarea"
                placeholder="Message"
                style={{ height: "100px" }}
                name="message"
                required
              />
            </FloatingLabel>
            <Button
              className="mt-3 mb-4"
              variant="dark"
              type="submit"
              value="Send"
            >
              Send
            </Button>

            {/* toast */}
            {isToast && (
              <Bounce right>
                <Toast>
                  <Toast.Header onClick={handleCloseToast}>
                    <img src="" className="rounded me-2" alt="" />
                    <strong className="me-auto">Message sent!</strong>
                    <small>Close</small>
                  </Toast.Header>
                  <Toast.Body>Thank you. Will reply you shortly</Toast.Body>
                </Toast>
              </Bounce>
            )}
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Contact;
