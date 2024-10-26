import React from 'react';
import { Home, Users, UserPlus, BarChart3, Brain ,BotIcon} from 'lucide-react';
import './Sidebar.css'; 
import ChatBot from './chatbot/ChatBot';
import ChatApp from './chatbot/ChatApp';

const Sidebar = ({ isOpen, activePage, setActivePage }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'leads', label: 'Leads', icon: UserPlus },
    { id: 'analytics', label: 'Predictive Analytics', icon: BarChart3 },
    { id: 'ai-insights', label: 'AI Insights', icon: Brain },
    { id: 'Chatbot', label: 'ChatBot', icon: BotIcon },
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <Brain className="sidebar-icon" />
        {isOpen && <span className="sidebar-title">SmartCRM</span>}
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`sidebar-button ${activePage === item.id ? 'active' : ''}`}
          >
            <item.icon className="sidebar-item-icon" />
            {isOpen && <span className="sidebar-item-label">{item.label}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
