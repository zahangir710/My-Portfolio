import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navigation.css";
const Navigation = () => {
  return (
    <Navbar bg="fs-5" expand="lg" sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <HashLink className="link-style" smooth to="/home#home">
              Home
            </HashLink>
            <HashLink className="link-style" smooth to="#about">
              About
            </HashLink>
            <HashLink className="link-style" smooth to="#skills">
              Skills
            </HashLink>
            <HashLink className="link-style" smooth to="#projects">
              Projects
            </HashLink>
            <HashLink className="link-style" smooth to="#contact">
              Contact
            </HashLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
