import React, { useState } from 'react';
import { FaComment } from 'react-icons/fa';
import ChatApp from './ChatApp'; // Импортируем компонент ChatApp
import './chat.css';

const ChatIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-container">
      <div className="chat-icon" onClick={toggleChat}>
        <FaComment />
      </div>
      {isOpen && (
        <div className="chat-window">
          <ChatApp /> {/* Отображаем ChatApp при открытом окне чата */}
        </div>
      )}
    </div>
  );
};

export default ChatIcon;
