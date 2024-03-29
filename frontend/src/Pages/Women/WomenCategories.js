import React from 'react';
import { Link } from 'react-router-dom';
import Accessories from './women acs.webp';
import Shoes from './women shoes.avif';
import Clothes from './women in clothes.avif'
import './WomenCategories.css';

const WomenCategories = () => {
  return (
    <div className="women-block">
      <div className="women-image-container">
        <Link to="/women/clothes">
          <img src={Clothes} alt="Clothes" />
          <p className="image-alt">Clothes</p>
        </Link>
      </div>
      <div className="women-image-container">
        <Link to="/women/shoes">
          <img src={Shoes} alt="Shoes" />
          <p className="image-alt">Shoes</p>
        </Link>
      </div>
      <div className="women-image-container">
        <Link to="/women/accessories">
          <img src={Accessories} alt="Accessories" />
          <p className="image-alt">Accessories</p>
        </Link>
      </div>
    </div>
  );
};

export default WomenCategories;
