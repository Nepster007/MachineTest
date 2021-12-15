import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "../App.css";

export const NavMenu = () => {
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        style={{ margin: "5px", fontSize: "20px" }}
      >
        <Navbar.Brand>LOGO</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link
            className="nav-active"
            style={{ marginLeft: "50px", fontSize: "20px" }}
            as={Link}
            to="/home"
          >
            HOME
          </Nav.Link>
          <Nav.Link
            className="nav-active"
            style={{ marginLeft: "50px", fontSize: "20px" }}
            as={Link}
            to="/task"
          >
            TASK
          </Nav.Link>
          <Nav.Link
            className="nav-active"
            style={{ marginLeft: "50px", fontSize: "20px" }}
            as={Link}
            to="/user"
          >
            USER
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
