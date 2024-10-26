import React from 'react';
import './ChatBubble.css';

const ChatBubble = ({ text, sender }) => {
  return (
    <div className={`chat-bubble ${sender === 'user' ? 'user' : 'bot'}`}>
      <p>{text}</p>
    </div>
  );
};

export default ChatBubble;
