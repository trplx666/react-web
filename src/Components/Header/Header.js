import React from 'react';
import logo from "./logo192.png"
import cart from "./cart.png";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';



function Header() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* Левая часть с картинкой */}
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Ссылки по центру */}
          <Nav className="ms-auto">
            <Nav.Link href="#new" className="mx-3">New</Nav.Link>
            <Nav.Link href="#men" className="mx-3">Men</Nav.Link>
            <Nav.Link href="#women" className="mx-3">Women</Nav.Link>
            <Nav.Link href="#kids" className="mx-3">Kids</Nav.Link>
          </Nav>
          {/* Правая часть с изображением и кнопкой */}
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
