import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink to={"/"}>Collect Produce</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto header">
              <div>
                <Link className="hLinks" to="/about">
                  About us
                </Link>
                <Link className="hLinks" to={"/order"}>
                  order
                </Link>
                <Link className="hLinks" to={"/service"}>
                  Service
                </Link>
                <Link className="hLinks" to={"/blogs"}>
                  Blogs
                </Link>
              </div>
            </Nav>
            <Nav>
              <div>
                <Link className="clr" to={"/login"}>
                  Login
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
