import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "redux/store";

const HeaderButtom = () => {
  const { data }: any = useSelector((state: AppState) => state.auth);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Categories</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link className="active" href="#home">
            News feed
          </Nav.Link>
          <Nav.Link as={Link} to="dashboard" className="active">
            {data?.role === "admin" ? "Dashboard" : "Merchant Zone"}
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
