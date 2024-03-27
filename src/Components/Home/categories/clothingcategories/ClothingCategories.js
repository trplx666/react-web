// ClothingCategories.js
import { Link } from 'react-router-dom';
import React from 'react';
import men from "./male.jpg";
import women from "./female.jpg";
import kid from "./kid.webp";
import './ClothingCategories.css';

function ClothingCategories() {
  return (
    <div className="clothing-container">
      <div className="clothing-image-container">
      <Link to="/men">
        <img src={men} alt="male" className="clothing-image" />
        </Link>
        <p className="image-alt">Men</p>
      </div>
      <div className="clothing-image-container">
      <Link to="/women">
        <img src={women} alt="female" className="clothing-image" />
        </Link>
        <p className="image-alt">Women</p>
      </div>
      <div className="clothing-image-container">
      <Link to="/kids">
        <img src={kid} alt="kid" className="clothing-image" />
        </Link>
        <p className="image-alt">Kids</p>
      </div>
    </div>
  );
}

export default ClothingCategories;
