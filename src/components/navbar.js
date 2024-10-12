import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../src/App.css';

function Navbar1() {
  return (
    <>
      <Navbar className="navstyle" expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="top11">Maheshwar Reddy</Navbar.Brand>
          
          {/* Add Navbar.Toggle and Navbar.Collapse for responsive behavior */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-3">
              <Nav.Link href="/" className="m-1 top1">Home</Nav.Link>
              <Nav.Link href="/contact" className="m-1 top1">Contact</Nav.Link>
              <Nav.Link href="/project" className="m-1 top1">Project</Nav.Link>
              <Nav.Link href="/resume" className="m-1 top1">Resume</Nav.Link>
              <Nav.Link href="/community" className="m-1 top1">Join Community</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;
