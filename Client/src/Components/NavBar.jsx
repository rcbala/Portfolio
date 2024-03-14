import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

const NavBar = () => {
  
  // const [Open, setOpen] = useState("");
  // useEffect(() => {
  //   const handler = () => {
  //   setOpen(false);
      
  //   }
  //   document.addEventListener("mousedown",handler)
  // })
  return (
    <Navbar bg="transparent" expand="lg" variant="" className="navbar">
      <Container>
        <Navbar.Brand className="navbar-link1">PORTFOLIO</Navbar.Brand>

        <Navbar.Toggle  aria-controls="basic-navbar-nav" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"

        >
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="navbar-link">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/About" className="navbar-link">
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" className="navbar-link">
              SKILLS
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="navbar-link">
              PROJECTS
            </Nav.Link>
            <Nav.Link as={Link} to="/education" className="navbar-link">
              EDUCATION
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="navbar-link">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
