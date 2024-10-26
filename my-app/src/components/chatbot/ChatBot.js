import React, { useState } from 'react';
import ChatBubble from './ChatBubble';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: '👋 Hi there! How can I help?', sender: 'bot' },
    { id: 2, text: "I'm just browsing!", sender: 'user' },
    { id: 3, text: 'No problem.\n\nIf you need help you can type below to ask a question 👇', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now(), text: input, sender: 'user' }]);
      setInput('');
      // Placeholder for API call to get bot response
      getBotResponse(input);
    }
  };

  const getBotResponse = (userInput) => {
    // TODO: Integrate with external API to get bot response
    // Fetch response from external chatbot API and update messages state
  };

  return (
    <div className="chatbot-container">
      <div className="messages">
        {messages.map((msg) => (
          <ChatBubble key={msg.id} text={msg.text} sender={msg.sender} />
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type a reply..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
