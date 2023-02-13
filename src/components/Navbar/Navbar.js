import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./style.scss";
import logo from "../../images/westwind_logo_white_text.svg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const MainNavbar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Westwind Property Management logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex ">
            <Nav.Link as={Link} to="/">
              Our services
            </Nav.Link>
            <Nav.Link as={Link} to="/testimonials">
              Testimonials
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto flex ">
            <Nav.Link as={Link} to="tel:6045555555">
              (604) 555-5555
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Get a estimate
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
