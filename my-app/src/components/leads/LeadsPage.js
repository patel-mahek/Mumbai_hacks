import React, { useState } from 'react';
import { Search, Filter, Upload } from 'lucide-react';
import LeadsTable from './LeadsTable';
import LeadsProfile from './LeadsProfile';
import './LeadsPage.css';

const LeadsPage = () => {
  const [selectedLead, setSelectedLead] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="leads-container">
      <div className="leads-header">
        <div>
          <h1 className="leads-title">Leads</h1>
          <p className="leads-subtitle">Track and manage potential customers</p>
        </div>
        <div className="leads-actions">
          <button className="import-leads-btn">
            <Upload className="icon" />
            Import Leads
          </button>
          <button className="add-lead-btn">Add Lead</button>
        </div>
      </div>

      <div className="leads-content">
        <div className="leads-table">
          <div className="search-bar">
            <div className="search-input-wrapper">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="filter-btn"
            >
              <Filter className="icon" />
            </button>
          </div>
          <LeadsTable onSelectLead={setSelectedLead} />
        </div>

        {selectedLead && (
          <div className="lead-profile">
            <LeadsProfile lead={selectedLead} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadsPage;
