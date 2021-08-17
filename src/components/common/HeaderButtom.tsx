import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const HeaderButtom = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Categories</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link className="active" href="#home">
            News feed
          </Nav.Link>
          <Nav.Link className="active" href="#features">
            Merchant Zone
          </Nav.Link>
          <Nav.Link className="active" href="#pricing">
            Help
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderButtom;
