import React from 'react';
import { Link } from 'react-router-dom';
import Accessories from './men acs.jpg';
import Shoes from './men shoes.jpg';
import Clothes from './men in clothes.jpg'
import './MenCategories.css';

const MenCategories = () => {
  return (
    <div className="men-block">
      <div className="men-image-container">
        <Link to="/men/clothes">
          <img src={Clothes} alt="Clothes" />
          <p className="image-alt">Clothes</p>
        </Link>
      </div>
      <div className="men-image-container">
        <Link to="/men/shoes">
          <img src={Shoes} alt="Shoes" />
          <p className="image-alt">Shoes</p>
        </Link>
      </div>
      <div className="men-image-container">
        <Link to="/men/accessories">
          <img src={Accessories} alt="Accessories" />
          <p className="image-alt">Accessories</p>
        </Link>
      </div>
    </div>
  );
};

export default MenCategories;
