import React from 'react';
import logo from "./logo192.png"
import cart from "./cart.png";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
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
            {/* Добавляем классы для изменения цвета текста */}
            <Nav.Link href="#new" className="mx-3 text-dark">New</Nav.Link>
            <Nav.Link href="#men" className="mx-3 text-dark">Men</Nav.Link>
            <Nav.Link href="#women" className="mx-3 text-dark">Women</Nav.Link>
            <Nav.Link href="#kids" className="mx-3 text-dark">Kids</Nav.Link>
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
                Sign in
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
