import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
import vk from './vk.svg';
import telegram from './telegram.svg';


const Footer = () => (
    <div className="footer-container">
      <Container fluid style={{ backgroundColor: '#333', color: '#fff'}}>           
        <Container style= {{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px'}}>
        <Link to="/register"  style={{ textDecoration: 'none', marginBottom: '10px' }}>© Clothing Shop</Link>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-10px' }}> 
            <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
              <img src={telegram} alt="telegram" style={{ width: '40px', marginRight: '15px' }} />
            </a>
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
              <img src={vk} alt="vk" style={{ width: '40px' }} />
            </a>
          </div>
        </Container>
      </Container>
    </div>
  );
  

export default Footer;
