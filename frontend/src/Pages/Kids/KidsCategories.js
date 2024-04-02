import React from 'react';
import { Link } from 'react-router-dom';
import Accessories from './kids acs.webp';
import Shoes from './kids shoes.png';
import Clothes from './kids clothes.jpg';
import './KidsCategories.css';

const KidsCategories = () => {
  return (
    <div className="kids-block">
      <div className="kids-image-container">
        <Link to="/kids/clothes">
          <img src={Clothes} alt="Clothes" />
          <p className="image-alt">Clothes</p>
        </Link>
      </div>
      <div className="kids-image-container">
        <Link to="/kids/shoes">
          <img src={Shoes} alt="Shoes" />
          <p className="image-alt">Shoes</p>
        </Link>
      </div>
      <div className="kids-image-container">
        <Link to="/kids/accessories">
          <img src={Accessories} alt="Accessories" />
          <p className="image-alt">Accessories</p>
        </Link>
      </div>
    </div>
  );
};

export default KidsCategories;
