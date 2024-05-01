import React from 'react';
import { FaComment } from 'react-icons/fa';
import './chat.css';

function ChatIcon() {
  return (
    <div className="chat-container">
      <div className="chat-icon" >
        <FaComment />
      </div>
    </div>
  );
}

export default ChatIcon;
