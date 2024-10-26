import React from 'react';
import { Users, UserPlus, Percent, BarChart } from 'lucide-react';
import RegionalMap from '../dashboard/RegionalMap.js';
import SentimentChart from '../dashboard/SentimentChart.js';
import CulturalCalendar from '../dashboard/CulturalCalendar.js';
import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    { label: 'Total Customers', value: '12,345', icon: <Users/>, change: '+12%' },
    { label: 'Total Leads', value: '2,876', icon: <UserPlus/>, change: '+5.3%' },
    { label: 'Conversion Rate', value: '24.8%', icon: <Percent/>, change: '+2.1%' },
    { label: 'Active Campaigns', value: '34', icon: <BarChart/>, change: '+8%' },
  ];

  return (
    <div className="dashboard-container">
        <div className="header">
          <h1 className="title">Dashboard Overview</h1>
          <p className="welcome-message">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-content">
                <div>
                  <p className="stat-label">{stat.label}</p>
                  <p className="stat-value">{stat.value}</p>
                </div>
                <div className="stat-icon-container">
                {stat.icon}
                </div>
              </div>
              <div className="stat-change">
                <span className="change-increase">{stat.change}</span>
                <span className="change-text">vs last month</span>
              </div>
            </div>
          ))}
        </div>
      <div className="charts-grid">
        <div className="chart-card">
          <h2 className="chart-title">Regional Insights</h2>
          <RegionalMap />
        </div>
        <div className="chart-card">
          <h2 className="chart-title">Sentiment Trends</h2>
          <SentimentChart />
        </div>
      </div>

      <div className="cultural-calendar-card">
        <h2 className="calendar-title">Cultural Calendar</h2>
        <CulturalCalendar />
      </div>
    </div>
  );
};

export default Dashboard;
