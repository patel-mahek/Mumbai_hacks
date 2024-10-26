import React, { useState } from 'react';
import { Menu, Bell } from 'lucide-react'; // Keep only the icons you're using
import Sidebar from './components/Sidebar';
import Dashboard from './components/Pages/Dashboard';
import CustomersPage from './components/customers/CustomersPage'
import LeadsPage from './components/leads/LeadsPage';
import Analytics from './components/Analytics';
import AIInsights from './components/AIInsights';
import ChatBot from './components/chatbot/ChatBot';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'customers':
        return <CustomersPage />;
      case 'leads':
        return <LeadsPage />;
      case 'analytics':
        return <Analytics />;
      case 'ai-insights':
        return <AIInsights />;
      // case 'Login':
      //   return <Login.js></Login.js>;
      case 'Chatbot':
        return <ChatBot />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="main-content">
        <header className="app-header">
          <div className="header-content">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="menu-button"
            >
              <Menu size={24} />
            </button>
            
            <div className="header-icons">
              <button className="notification-button">
                <Bell size={20} />
                <span className="notification-dot"></span>
              </button>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="profile-image"
              />
            </div>
          </div>
        </header>

        <main className="app-main">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
