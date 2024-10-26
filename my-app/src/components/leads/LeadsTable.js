import React from 'react';
import { MoreVertical, MessageCircle } from 'lucide-react';
import './LeadsTable.css'
const LeadsTable = ({ onSelectLead }) => {
  const leads = [
    {
      id: 1,
      name: 'Suresh Reddy',
      email: 'suresh.r@example.com',
      source: 'WhatsApp Campaign',
      probability: 85,
      status: 'Hot',
      last_contact: '1 day ago',
      region: 'South India',
      state: 'Telangana',
      language: 'Telugu, English',
      preferred_contact: 'WhatsApp',
      cultural_context: 'Festival Season Shopper',
      ai_suggestion: 'Follow up with Dussehra special offers'
    },
    {
      id: 2,
      name: 'Anjali Singh',
      email: 'anjali.s@example.com',
      source: 'Email Blast',
      probability: 70,
      status: 'Warm',
      last_contact: '3 days ago',
      region: 'North India',
      state: 'Delhi',
      language: 'Hindi, English',
      preferred_contact: 'Email',
      cultural_context: 'Diwali Discount Seeker',
      ai_suggestion: 'Send Diwali promotion email with discount code'
    },
    {
      id: 3,
      name: 'Ravi Kumar',
      email: 'ravi.k@example.com',
      source: 'Google Ads',
      probability: 60,
      status: 'Cold',
      last_contact: '2 weeks ago',
      region: 'West India',
      state: 'Maharashtra',
      language: 'Marathi, Hindi',
      preferred_contact: 'Phone Call',
      cultural_context: 'Online Deal Hunter',
      ai_suggestion: 'Offer introductory discount for first-time buyers'
    },
    {
      id: 4,
      name: 'Pooja Mehta',
      email: 'pooja.m@example.com',
      source: 'Website Form',
      probability: 90,
      status: 'Hot',
      last_contact: '2 hours ago',
      region: 'West India',
      state: 'Gujarat',
      language: 'Gujarati, English',
      preferred_contact: 'WhatsApp',
      cultural_context: 'Early Bird Shopper',
      ai_suggestion: 'Provide limited-time offer on selected products'
    },
    {
      id: 5,
      name: 'Amit Sharma',
      email: 'amit.s@example.com',
      source: 'Facebook Ad',
      probability: 50,
      status: 'Cold',
      last_contact: '1 month ago',
      region: 'East India',
      state: 'West Bengal',
      language: 'Bengali, Hindi',
      preferred_contact: 'Email',
      cultural_context: 'Festival Sale Explorer',
      ai_suggestion: 'Invite to pre-Diwali sale event'
    },
    {
      id: 6,
      name: 'Lakshmi Rao',
      email: 'lakshmi.r@example.com',
      source: 'LinkedIn Outreach',
      probability: 75,
      status: 'Warm',
      last_contact: '5 days ago',
      region: 'South India',
      state: 'Karnataka',
      language: 'Kannada, English',
      preferred_contact: 'Phone Call',
      cultural_context: 'Professional Networker',
      ai_suggestion: 'Discuss corporate gifting options for her company'
    },
    {
      id: 7,
      name: 'Vikram Das',
      email: 'vikram.d@example.com',
      source: 'Referral',
      probability: 80,
      status: 'Hot',
      last_contact: 'Today',
      region: 'North India',
      state: 'Punjab',
      language: 'Punjabi, Hindi',
      preferred_contact: 'WhatsApp',
      cultural_context: 'Community Referral',
      ai_suggestion: 'Leverage friend referral discount'
    },
    {
      id: 8,
      name: 'Neha Patel',
      email: 'neha.p@example.com',
      source: 'Instagram Campaign',
      probability: 65,
      status: 'Warm',
      last_contact: '4 days ago',
      region: 'West India',
      state: 'Rajasthan',
      language: 'Hindi, Rajasthani',
      preferred_contact: 'Instagram DM',
      cultural_context: 'Social Media Influenced Shopper',
      ai_suggestion: 'Offer influencer-inspired seasonal product line'
    },
  ];

  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-head">
          <tr>
            <th className="table-header">Lead</th>
            <th className="table-header">Region/State</th>
            <th className="table-header">Probability</th>
            <th className="table-header">Status</th>
            <th className="table-header">Cultural Context</th>
            <th className="table-header">Preferred Contact</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {leads.map((lead) => (
            <tr key={lead.id} onClick={() => onSelectLead(lead)} className="table-row">
              <td className="table-cell">
                <div className="lead-info">
                  <div className="lead-initials">{lead.name.charAt(0)}</div>
                  <div>
                    <div className="lead-name">{lead.name}</div>
                    <div className="lead-email">{lead.email}</div>
                  </div>
                </div>
              </td>
              <td className="table-cell">
                <div>{lead.region}</div>
                <div className="state-info">{lead.state}</div>
              </td>
              <td className="table-cell">
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar"
                    style={{ width: `${lead.probability}%` }}
                  ></div>
                </div>
                <span>{lead.probability}%</span>
              </td>
              <td className="table-cell">
                <span className={`status-badge ${lead.status === 'Hot' ? 'status-hot' : 'status-warm'}`}>
                  {lead.status}
                </span>
              </td>
              <td className="table-cell">{lead.cultural_context}</td>
              <td className="table-cell">{lead.preferred_contact}</td>
              <td className="table-cell actions-cell">
                <button className="action-button">
                  <MessageCircle />
                </button>
                <button className="action-button">
                  <MoreVertical />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadsTable;
