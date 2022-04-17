import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand
            className="text-black fs-3 fw-bold "
            as={Link}
            to={"/home"}
          >
            Leon's Photography
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link className=" fw-bold" as={Link} to={"/home"}>
                Home
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto text-black fw-bold">
              <Nav.Link as={Link} to={"/login"}>
                Login
              </Nav.Link>
              <Nav.Link as={Link} to={"/blogs"}>
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to={"/about"}>
                About Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
