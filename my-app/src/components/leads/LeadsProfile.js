import React from 'react';
import { Phone, Mail, Calendar, MessageCircle, FileText, Zap } from 'lucide-react';
import './LeadsProfile.css';

const LeadsProfile = ({ lead }) => {
  return (
    <div className="lead-profile-container">
      <div className="lead-profile-header">
        <div className="header-content">
          <div className="lead-avatar">
            <span className="lead-avatar-initial">{lead.name.charAt(0)}</span>
          </div>
          <div className="lead-info">
            <h2 className="lead-name">{lead.name}</h2>
            <p className="lead-source">{lead.source}</p>
          </div>
        </div>
        <button className="whatsapp-button">
          <MessageCircle className="icon" />
          WhatsApp
        </button>
      </div>

      <div className="lead-profile-content">
        <div className="ai-suggestions">
          <h3 className="section-title">AI Engagement Suggestions</h3>
          <div className="suggestion-card suggestion-green">
            <div className="suggestion-header">
              <Zap className="icon-green" />
              <span>Best Time to Contact</span>
            </div>
            <p className="suggestion-text">Tuesday or Thursday afternoons (2-4 PM local time)</p>
          </div>
          <div className="suggestion-card suggestion-indigo">
            <div className="suggestion-header">
              <Zap className="icon-indigo" />
              <span>Recommended Approach</span>
            </div>
            <p className="suggestion-text">{lead.ai_suggestion}</p>
          </div>
        </div>

        <div className="contact-info">
          <h3 className="section-title">Contact Information</h3>
          <div className="contact-item">
            <Mail className="icon-gray" />
            <span>{lead.email}</span>
          </div>
          <div className="contact-item">
            <Phone className="icon-gray" />
            <span>+1 (555) 987-6543</span>
          </div>
        </div>

        <div className="documents">
          <h3 className="section-title">Documents</h3>
          <div className="document-card">
            <div className="document-info">
              <FileText className="icon-gray" />
              <span>Product Requirements.pdf</span>
            </div>
            <button className="view-button">View</button>
          </div>
          <button className="upload-button">Upload Document</button>
        </div>

        <div className="interaction-timeline">
          <h3 className="section-title">Interaction Timeline</h3>
          {[
            { date: '2 days ago', action: 'Email sent', response: 'Opened' },
            { date: '5 days ago', action: 'Meeting scheduled', response: 'Confirmed' },
            { date: '1 week ago', action: 'Initial contact', response: 'Interested' },
          ].map((interaction, index) => (
            <div key={index} className="interaction-item">
              <div className="timeline-marker"></div>
              <div className="interaction-details">
                <p className="interaction-action">{interaction.action}</p>
                <div className="interaction-meta">
                  <span>{interaction.date}</span>
                  <span className="dot">•</span>
                  <span className="interaction-response">{interaction.response}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadsProfile;
