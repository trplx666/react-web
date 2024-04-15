import React from 'react';
import MenCategories from './MenCategories';
import './Men.css';
import ChatIcon from '../../Components/Chat/chat';

export const Men = () => (
  <div className="men-container">
    <h1>Men</h1>
    <MenCategories />
    <ChatIcon />
  </div>
);
