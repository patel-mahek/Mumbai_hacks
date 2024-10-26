import React, { useState } from 'react';
import { Search, Filter, Upload } from 'lucide-react';
import CustomerTable from './CustomerTable';
import CustomerProfile from './CustomerProfile';
import './CustomersPage.css';


const CustomersPage = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  return React.createElement(
    'div',
    { className: 'customers-page-container' },
    React.createElement(
      'div',
      { className: 'header-container' },
      React.createElement(
        'div',
        {},
        React.createElement('h1', { className: 'page-title' }, 'Customers'),
        React.createElement(
          'p',
          { className: 'page-description' },
          'Manage and analyze your customer base'
        )
      ),
      React.createElement(
        'div',
        { className: 'actions-container' },
        React.createElement(
          'button',
          { className: 'add-customer-btn' },
          'Add Customer'
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'main-content' },
      React.createElement(
        'div',
        { className: 'table-section' },
        React.createElement(
          'div',
          { className: 'search-filter-container' },
          React.createElement(
            'div',
            { className: 'search-bar' },
            React.createElement(Search, { className: 'search-icon' }),
            React.createElement('input', {
              type: 'text',
              placeholder: 'Search customers...',
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              className: 'search-input',
            })
          ),
          React.createElement(
            'button',
            {
              onClick: () => setFilterOpen(!filterOpen),
              className: 'filter-btn',
            },
            React.createElement(Filter, { className: 'filter-icon' })
          )
        ),
        React.createElement(CustomerTable, { onSelectCustomer: setSelectedCustomer })
      ),
      selectedCustomer &&
        React.createElement(
          'div',
          { className: 'customer-profile-section' },
          React.createElement(CustomerProfile, { customer: selectedCustomer })
        )
    )
  );
};

export default CustomersPage;
