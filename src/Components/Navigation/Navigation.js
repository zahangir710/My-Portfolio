import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <Navbar
      bg="dark fw-bold fs-5"
      variant="dark"
      expand="lg"
      sticky="top"
      className="background"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="#home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/home#about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/home#skills">
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/home#projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/home#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
