import React from 'react';
import { Link } from 'react-router-dom';
import Babies from './1.jpg';
import Little from './2.jpg';
import Big from './3.jpg';
import Oversize from './4.jpg';
import './KidsCategories.css';

const KidsCategories = ({ imageWidth, imageHeight }) => {
  return (
    <div className="kids-block" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="kids-row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <Link to="/kids/babies" className="kids-image-container" style={{ margin: '5px' }}>
          <img src={Babies} alt="Babies" style={{ width: "300px", height: '400px' }} />
          <p className="image-alt">Babies and Toddlers</p>
        </Link>
        <Link to="/kids/Little-kids" className="kids-image-container" style={{ margin: '5px' }}>
          <img src={Little} alt="Little-kids" style={{ width: '300px', height: '400px' }} />
          <p className="image-alt">Little Kids</p>
        </Link>
      </div>
      <div className="kids-row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <Link to="/kids/big-kids" className="kids-image-container" style={{ margin: '5px' }}>
          <img src={Big} alt="Big-kids" style={{ width: "300px", height: "400px" }} />
          <p className="image-alt">Big Kids</p>
        </Link>
        <Link to="/kids/oversized-fits" className="kids-image-container" style={{ margin: '5px' }}>
          <img src={Oversize} alt="Oversized-fits" style={{ width: "300px", height: "400px" }} />
          <p className="image-alt">Oversized fits</p>
        </Link>
      </div>
    </div>
  );
};

export default KidsCategories;
