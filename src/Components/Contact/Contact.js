import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
    <Container className="my-5">
      <Form ref={form} onSubmit={sendEmail}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h4 className="text-center mb-4">Contact Me</h4>
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
            <Button className="mt-3" variant="dark" type="submit" value="Send">
              Send
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Contact;
