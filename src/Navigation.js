import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  const [img, setImg] = useState("goanna.png");
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={img}
            onMouseEnter={() => setImg("purple_goanna.png")}
            onMouseOut={() => setImg("goanna.png")}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="Goanna logo"
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/treasure-hunt">Treasure Hunt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
