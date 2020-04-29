import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = (props) => {
  const headerStyles = {};
  return (
    <div style={headerStyles}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#">Reddit-Clone</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={props.whenButtonClick}>{props.buttonText}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
