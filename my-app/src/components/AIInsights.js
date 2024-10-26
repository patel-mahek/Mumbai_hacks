import React from 'react';
import { Brain, TrendingUp, MapPin } from 'lucide-react';
import './AIInsights.css'; 

const AIInsights = () => {
  const trends = [
    {
      trend: 'Eco-Friendly Products',
      growth: '+28%',
      region: 'Urban Centers',
      description: 'Growing preference for sustainable packaging',
    },
    {
      trend: 'Local Artisanal Goods',
      growth: '+15%',
      region: 'Suburban Areas',
      description: 'Increasing support for local craftsmen',
    },
    {
      trend: 'Digital Payment Methods',
      growth: '+45%',
      region: 'All Regions',
      description: 'Shift towards contactless transactions',
    },
  ];

  const recommendations = [
    {
      location: 'Downtown District',
      products: ['Premium Coffee Beans', 'Organic Snacks', 'Wellness Products'],
      sentiment: 'Positive',
    },
    {
      location: 'Suburban Area',
      products: ['Family Meal Kits', 'Home Office Equipment', 'Educational Toys'],
      sentiment: 'Very Positive',
    },
    {
      location: 'University Zone',
      products: ['Study Materials', 'Tech Accessories', 'Quick Meals'],
      sentiment: 'Neutral',
    },
  ];

  const actionItems = [
    'Launch targeted email campaign for eco-conscious customers in urban areas',
    'Develop new product bundles based on regional festival calendar',
    'Optimize inventory for upcoming seasonal demands',
    'Schedule social media posts during peak engagement hours by region',
  ];

  return (
    <div className="ai-insights-container">
      <div className="header">
        <h1 className="title">AI-Assisted Insights</h1>
        <p className="subtitle">Machine learning powered trends and recommendations</p>
      </div>

      <div className="trends-recommendations">
        <div className="trends-section">
          <div className="section-header">
            <Brain className="icon" />
            <h2 className="section-title">Socio-Cultural Trends</h2>
          </div>
          <div className="trends-list">
            {trends.map((item) => (
              <div key={item.trend} className="trend-item">
                <div className="trend-header">
                  <h3 className="trend-name">{item.trend}</h3>
                  <span className="trend-growth">{item.growth}</span>
                </div>
                <p className="trend-description">{item.description}</p>
                <p className="trend-region">Region: {item.region}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="recommendations-section">
          <div className="section-header">
            <MapPin className="icon" />
            <h2 className="section-title">Hyperlocal Recommendations</h2>
          </div>
          <div className="recommendations-list">
            {recommendations.map((item) => (
              <div key={item.location} className="recommendation-item">
                <h3 className="location-name">{item.location}</h3>
                <div className="product-tags">
                  {item.products.map((product) => (
                    <span key={product} className="product-tag">{product}</span>
                  ))}
                </div>
                <p className="recommendation-sentiment">Sentiment: {item.sentiment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="action-items-section">
        <div className="section-header">
          <TrendingUp className="icon" />
          <h2 className="section-title">AI-Generated Action Items</h2>
        </div>
        <div className="action-items-list">
          {actionItems.map((action, index) => (
            <div key={index} className="action-item">
              <div className="action-indicator"></div>
              <p className="action-text">{action}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
