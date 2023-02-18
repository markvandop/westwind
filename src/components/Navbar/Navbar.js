import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./style.scss";
import logo from "../../images/monsterjam-logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const MainNavbar = () => {
  return (
    <Navbar className="sticky-top navbar-dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Westwind Property Management logo" />
        </Navbar.Brand>
        <Nav className="ml-auto flex">
          <span className="nav-text">Driver Stats</span>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
