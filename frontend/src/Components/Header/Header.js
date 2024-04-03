import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./logo.webp"
import cart from "./cart.png";
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { userData } from '../../helpers';

function Header() {
  const user = userData()

  const isUserLogged = user.username !== undefined && user.jwt !== undefined

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container>
          <Link to="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/new" className="mx-3 text-dark" style={{ textDecoration: 'none' }}>New</Link>
              <Link to="/men" className="mx-3 text-dark" style={{ textDecoration: 'none' }}>Men</Link>
              <Link to="/women" className="mx-3 text-dark" style={{ textDecoration: 'none' }}>Women</Link>
              <Link to="/kids" className="mx-3 text-dark" style={{ textDecoration: 'none' }}>Kids</Link>
            </Nav>
            <Nav className="ms-auto">
              <Link to="#cart">
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
              </Link>
              { isUserLogged ? (
                  <Link to="/profile" className="mx-3 text-dark" style={{ textDecoration: 'none' }}>{user.username}</Link>
                ) : (
                  <Link to="/login" className="mx-3 text-dark" style={{ textDecoration: 'none' }}>Login</Link>
                )
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="content">
      </div>
    </div>
  );
}

export default Header;
