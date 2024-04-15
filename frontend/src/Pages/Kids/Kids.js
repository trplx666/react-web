import React from 'react';
import KidsCategories from './KidsCategories'; 
import './kids.css'
import ChatIcon from '../../Components/Chat/chat';

export const Kids = () => {
  return (
    <div className='kids-container'>
      <h1>Kids</h1>
      <KidsCategories />
      <ChatIcon />
    </div>
  );
};  

