import React from 'react';
import { Phone, Mail, Clock, Calendar, ShoppingBag } from 'lucide-react';
import './CustomerProfile.css';

const CustomerProfile = ({ customer }) => {
  return React.createElement(
    'div',
    { className: 'customer-profile-container' },
    React.createElement(
      'div',
      { className: 'profile-header' },
      React.createElement(
        'div',
        { className: 'profile-icon' },
        React.createElement(
          'span',
          { className: 'profile-icon-text' },
          customer.name.charAt(0)
        )
      ),
      React.createElement(
        'div',
        { className: 'profile-info' },
        React.createElement(
          'h2',
          { className: 'customer-name' },
          customer.name
        ),
        React.createElement(
          'p',
          { className: 'cultural-segment' },
          customer.cultural_segment
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'profile-content' },
      // Contact Information Section
      React.createElement(
        'div',
        {},
        React.createElement(
          'h3',
          { className: 'section-heading' },
          'Contact Information'
        ),
        React.createElement(
          'div',
          { className: 'contact-info' },
          React.createElement(
            'div',
            { className: 'contact-item' },
            React.createElement(Mail, { className: 'icon' }),
            React.createElement('span', {}, customer.email)
          ),
          React.createElement(
            'div',
            { className: 'contact-item' },
            React.createElement(Phone, { className: 'icon' }),
            React.createElement('span', {}, '+1 (555) 123-4567')
          )
        )
      ),
      // Cultural Background Section
      React.createElement(
        'div',
        {},
        React.createElement(
          'h3',
          { className: 'section-heading' },
          'Cultural Background'
        ),
        React.createElement(
          'div',
          { className: 'cultural-info' },
          React.createElement(
            'div',
            { className: 'info-item' },
            React.createElement('span', { className: 'info-label' }, 'Region:'),
            ` ${customer.region}`
          ),
          React.createElement(
            'div',
            { className: 'info-item' },
            React.createElement('span', { className: 'info-label' }, 'Language Preference:'),
            ' English, Mandarin'
          ),
          React.createElement(
            'div',
            { className: 'info-item' },
            React.createElement('span', { className: 'info-label' }, 'Cultural Preferences:'),
            ' Lunar New Year, Mid-Autumn Festival'
          )
        )
      ),
      // Best Contact Times Section
      React.createElement(
        'div',
        {},
        React.createElement(
          'h3',
          { className: 'section-heading' },
          'Best Contact Times'
        ),
        React.createElement(
          'div',
          { className: 'contact-times' },
          React.createElement(
            'div',
            { className: 'time-item' },
            React.createElement(Clock, { className: 'icon' }),
            React.createElement('span', {}, '9:00 AM - 5:00 PM (Local Time)')
          ),
          React.createElement(
            'div',
            { className: 'time-item' },
            React.createElement(Calendar, { className: 'icon' }),
            React.createElement('span', {}, 'Weekdays preferred')
          )
        )
      ),
      // Recent Purchases Section
      React.createElement(
        'div',
        {},
        React.createElement(
          'h3',
          { className: 'section-heading' },
          'Recent Purchases'
        ),
        React.createElement(
          'div',
          { className: 'purchases' },
          [1, 2, 3].map((purchase) =>
            React.createElement(
              'div',
              { key: purchase, className: 'purchase-item' },
              React.createElement(
                'div',
                { className: 'purchase-info' },
                React.createElement(ShoppingBag, { className: 'icon' }),
                React.createElement('span', {}, `Product ${purchase}`)
              ),
              React.createElement('span', { className: 'price' }, '$299')
            )
          )
        )
      ),
      // Preferences & Interests Section
      React.createElement(
        'div',
        {},
        React.createElement(
          'h3',
          { className: 'section-heading' },
          'Preferences & Interests'
        ),
        React.createElement(
          'div',
          { className: 'preferences' },
          ['Technology', 'Eco-friendly', 'Premium', 'Mobile-first'].map((tag) =>
            React.createElement(
              'span',
              { key: tag, className: 'tag' },
              tag
            )
          )
        )
      )
    )
  );
};

export default CustomerProfile;
