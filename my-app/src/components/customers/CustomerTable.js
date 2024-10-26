import React from 'react';
import { MoreVertical, Star } from 'lucide-react';
import './CustomerTable.css';

const CustomerTable = ({ onSelectCustomer }) => {
  const customers = [
    { id: 1, name: 'Rajesh Kumar', email: 'rajesh.k@example.com', region: 'North India', state: 'Delhi NCR', lifetime_value: '₹1,85,450', status: 'Active', cultural_segment: 'Urban Professional', language: 'Hindi, English', sentiment: 'Positive', festivals: ['Diwali', 'Holi'] },
    { id: 2, name: 'Priya Sharma', email: 'priya.s@example.com', region: 'South India', state: 'Karnataka', lifetime_value: '₹2,25,800', status: 'Active', cultural_segment: 'Tech Early Adopter', language: 'Kannada, English', sentiment: 'Very Positive', festivals: ['Ugadi', 'Diwali'] },
    { id: 3, name: 'Abdul Rahman', email: 'abdul.r@example.com', region: 'West India', state: 'Maharashtra', lifetime_value: '₹95,600', status: 'Active', cultural_segment: 'Small Business Owner', language: 'Marathi, Hindi, English', sentiment: 'Neutral', festivals: ['Eid', 'Diwali'] },
    { id: 4, name: 'Lakshmi Iyer', email: 'lakshmi.i@example.com', region: 'South India', state: 'Tamil Nadu', lifetime_value: '₹3,15,750', status: 'Active', cultural_segment: 'Traditional Value Seeker', language: 'Tamil, English', sentiment: 'Positive', festivals: ['Pongal', 'Diwali'] },
    { id: 5, name: 'Amit Patel', email: 'amit.p@example.com', region: 'West India', state: 'Gujarat', lifetime_value: '₹2,75,900', status: 'Active', cultural_segment: 'Business Professional', language: 'Gujarati, Hindi, English', sentiment: 'Very Positive', festivals: ['Navratri', 'Diwali'] }
  ];

  return (
    <div className="table-container">
      <table className="customer-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Region/State</th>
            <th>Lifetime Value</th>
            <th>Cultural Segment</th>
            <th>Languages</th>
            <th className="actions-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} onClick={() => onSelectCustomer(customer)} className="customer-row">
              <td>
                <div className="customer-info">
                  <div className="customer-avatar">
                    <span>{customer.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="customer-name">{customer.name}</div>
                    <div className="customer-email">{customer.email}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="region">{customer.region}</div>
                <div className="state">{customer.state}</div>
              </td>
              <td>{customer.lifetime_value}</td>
              <td>
                <span className="cultural-segment">{customer.cultural_segment}</span>
              </td>
              <td>{customer.language}</td>
              <td className="actions">
                <button className="actions-button">
                <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/user-male-circle.png" alt="user-male-circle"/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
