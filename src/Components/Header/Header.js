import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import logo from "./logo192.png"
import cart from "./cart.png";
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/"> {/* Заменяем Navbar.Brand на Link */}
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/new" className="mx-3 text-dark">New</Nav.Link> {/* Используем Link */}
            <Nav.Link as={Link} to="/men" className="mx-3 text-dark">Men</Nav.Link> {/* Используем Link */}
            <Nav.Link as={Link} to="/women" className="mx-3 text-dark">Women</Nav.Link> {/* Используем Link */}
            <Nav.Link as={Link} to="/kids" className="mx-3 text-dark">Kids</Nav.Link> {/* Используем Link */}
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#cart">
              <div className="d-flex align-items-center">
                <img
                  src={cart}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  style={{ marginRight: '10px' }}
                  alt="Cart"
                />
              </div>
            </Nav.Link>
            <Nav.Link as={Link} to="/Sign-in" className="mx-3 text-dark">Sign in</Nav.Link> {/* Используем Link */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
