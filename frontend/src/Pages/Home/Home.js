import React from 'react';
import Slider from './slider/Slider';
import AboutBlock from './categories/aboutblock/AboutBlock';
import ClothingCategories from './categories/clothingcategories/ClothingCategories';
import CustomAccordion from './categories/accordion/Accordion';


const Home = () => (
  <div style={{ padding: '0 20px' }}>
    <Slider />
    <div style={{ marginTop: '32px' }}>
      <AboutBlock />
    </div>
    <div className='text-center' style={{ marginTop: '32px' }}>
      <p style={{ fontSize: '24px' }}>Categories</p>
    </div>
    <ClothingCategories />
    <CustomAccordion />
  </div>
);

export default Home;
