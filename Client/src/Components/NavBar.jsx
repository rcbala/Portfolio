import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="transparent" expand="lg" variant="" className="navbar" expanded={expanded}>
      <Container>
        <Navbar.Brand className="navbar-link1">PORTFOLIO</Navbar.Brand>

        <Navbar.Toggle  aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"

        >
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="navbar-link" onClick={() => setExpanded(!expanded)}>
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/About" className="navbar-link" onClick={() => setExpanded(!expanded)}>
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" className="navbar-link" onClick={() => setExpanded(!expanded)}>
              SKILLS
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="navbar-link" onClick={() => setExpanded(!expanded)}> 
              PROJECTS
            </Nav.Link>
            <Nav.Link as={Link} to="/education" className="navbar-link" onClick={() => setExpanded(!expanded)}>
              EDUCATION
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="navbar-link" onClick={() => setExpanded(!expanded)}>
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
