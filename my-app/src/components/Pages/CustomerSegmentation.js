import React, { useState } from 'react';
import { Filter, Search, Download } from 'lucide-react'; // Assuming these are named exports
import './CustomerSegmentation.css'; // Ensure this file exists and is correctly linked

const CustomerSegmentation = () => {
  const [activeTab, setActiveTab] = useState('socio-economic');

  return (
    <div className="customer-segmentation-container">
      <div className="header">
        <div>
          <h1 className="title">Customer Segmentation</h1>
          <p className="description">Analyze and segment customers based on various factors</p>
        </div>
        <div className="actions">
          <button className="action-button">
            <Filter className="icon" />
            Filters
          </button>
          <button className="action-button">
            <Download className="icon" />
            Export
          </button>
        </div>
      </div>

      <div className="content-container">
        <div className="tabs">
          <nav className="flex">
            {['socio-economic', 'cultural', 'ai-recommendations'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-button ${activeTab === tab ? 'active-tab' : 'inactive-tab'}`}
              >
                {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </nav>
        </div>

        <div className="content">
          <div className="search mb-6">
            <div className="relative">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search segments..."
                className="search-input"
              />
            </div>
          </div>

          <div className="segments">
            {[1, 2, 3, 4, 5, 6].map((segment) => (
              <div key={segment} className="segment">
                <h3 className="segment-title">Segment {segment}</h3>
                <p className="segment-description">Description of the segment goes here...</p>
                <div className="segment-footer">
                  <span className="customer-count">1,234 customers</span>
                  <button className="view-details">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSegmentation;
