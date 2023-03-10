import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./style.scss";
import logo from "../../images/westwind_logo_white_text.svg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const MainNavbar = () => {
  return (
    <Navbar className="sticky-top navbar-dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Westwind Property Management logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex ">
            {/* <Nav.Link as={Link} to="/">
              Our services
            </Nav.Link>
            <Nav.Link as={Link} to="/testimonials">
              Testimonials
            </Nav.Link> */}
          </Nav>
          <Nav className="ml-auto flex ">
            <Nav.Link href="tel:6047731238">(604) 773-1238</Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Request a free quote
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
