import React from 'react';
import { TrendingUp, Users, Calendar } from 'lucide-react';
import './Analytics.css'; // Import the CSS file

const Analytics = () => {
  return (
    <div className="analytics-container">
      <div className="header">
        <h1 className="title">Predictive Analytics</h1>
        <p className="subtitle">AI-powered insights and predictions</p>
      </div>

      <div className="analytics-grid">
        <div className="analytics-card">
          <div className="card-header">
            <TrendingUp className="icon" />
            <h2 className="card-title">Churn Prediction</h2>
          </div>
          <div className="card-content">
            <div className="risk-level">
              <span className="risk-text">High Risk</span>
              <span className="high-risk">234 customers</span>
            </div>
            <div className="risk-level">
              <span className="risk-text">Medium Risk</span>
              <span className="medium-risk">567 customers</span>
            </div>
            <div className="risk-level">
              <span className="risk-text">Low Risk</span>
              <span className="low-risk">1,890 customers</span>
            </div>
          </div>
        </div>

        <div className="analytics-card">
          <div className="card-header">
            <Users className="icon" />
            <h2 className="card-title">Buying Propensity</h2>
          </div>
          <div className="card-content">
            <div className="risk-level">
              <span className="risk-text">High Intent</span>
              <span className="high-intent">456 leads</span>
            </div>
            <div className="risk-level">
              <span className="risk-text">Medium Intent</span>
              <span className="medium-intent">789 leads</span>
            </div>
            <div className="risk-level">
              <span className="risk-text">Low Intent</span>
              <span className="low-intent">123 leads</span>
            </div>
          </div>
        </div>

        <div className="analytics-card">
          <div className="card-header">
            <Calendar className="icon" />
            <h2 className="card-title">Event-Driven Insights</h2>
          </div>
          <div className="card-content">
            <div className="event-item">
              <p className="event-title">Upcoming Festival Season</p>
              <p className="event-description">Expected 45% increase in engagement</p>
            </div>
            <div className="event-item">
              <p className="event-title">Local Holiday</p>
              <p className="event-description">Prepare targeted campaigns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
