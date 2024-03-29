import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
import vk from './vk.svg';
import telegram from './telegram.svg';


const Footer = () => (
    <div className="footer-container">
      <Container fluid style={{ backgroundColor: '#333', color: '#fff'}}>           
        <Container style= {{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px'}}>
          <p style={{ marginBottom: '10px' }}>© Cloting Shop</p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-10px' }}> 
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <img src={telegram} alt="telegram" style={{ width: '40px', marginRight: '15px' }} />
            </a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <img src={vk} alt="vk" style={{ width: '40px' }} />
            </a>
          </div>
        </Container>
      </Container>
    </div>
  );
  

export default Footer;
