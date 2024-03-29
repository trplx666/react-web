import React from 'react';
import { Link } from 'react-router-dom';
import Clothes from './1.jpg';
import Shoes from './2.jpg';
import Accessories from './3.jpg';
import Accessories1 from './4.jpg';
import './KidsCategories.css';

const KidsCategories = ({ imageWidth, imageHeight }) => {
  return (
    <div className="kids-block" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="kids-row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <Link to="/kids/clothes" className="kids-image-container" style={{ margin: '5px' }}>
          <img src={Clothes} alt="Clothes" style={{ width: "300px", height: '400px' }} />
          <p className="image-alt">Babies and Toddlers</p>
        </Link>
        <Link to="/kids/shoes" className="kids-image-container" style={{ margin: '5px' }}>
          <img src={Shoes} alt="Shoes" style={{ width: '300px', height: '400px' }} />
          <p className="image-alt">Little Kids</p>
        </Link>
      </div>
      <div className="kids-row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <Link to="/kids/accessories" className="kids-image-container" style={{ margin: '5px' }}>
          <img src={Accessories} alt="Accessories" style={{ width: "300px", height: "400px" }} />
          <p className="image-alt">Accessories</p>
        </Link>
        <Link to="/kids/accessories1" className="kids-image-container" style={{ margin: '5px' }}>
          <img src={Accessories1} alt="Accessories1" style={{ width: "300px", height: "400px" }} />
          <p className="image-alt">Accessories1</p>
        </Link>
      </div>
    </div>
  );
};

export default KidsCategories;
