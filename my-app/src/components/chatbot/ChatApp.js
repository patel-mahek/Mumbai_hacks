/*main box headers etc*/

import React, { useState } from 'react';
import ChatBot from './ChatBot';
import './ChatApp.css';

const ChatApp = () => {
  return (
    <div className="chat-app">
      
      <div className="chat-header">
        <img src="./icon.png" alt="Profiles" className="profile-icons" />
        <h2>Bot</h2> 
        <p>A few minutes ago</p> 
      </div>
      <ChatBot />
    </div>
  );
};

export default ChatApp;
