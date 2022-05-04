import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import auth from "../firebaseInit";
import { useAuthState } from "react-firebase-hooks/auth";
const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
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
                <Link className="hLinks" to={"/inventory"}>
                  Inventory
                </Link>
                <Link className="hLinks" to={"/manage"}>
                  Manage Item
                </Link>
                <Link className="hLinks" to={"/my"}>
                  My Item
                </Link>
              </div>
            </Nav>
            <Nav>
              <div>
                {user ? (
                  <Link to="/regester" className="" onClick={logout}>
                    sign out
                  </Link>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
