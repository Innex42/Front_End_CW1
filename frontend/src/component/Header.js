import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
//import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar bg='success' expand="lg" variant='dark' >
      <Container>
        <Navbar.Brand to="/">Recipes R Us</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Recipes</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Menu">
              <Nav.Link to="/Menu">Menu</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ShoppingList">
              <Nav.Link to="ShoppingList">Shopping List</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;