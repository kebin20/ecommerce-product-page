/* eslint-disable react/prop-types */
import React from 'react';
import './NavigationItem.scss';

// I am using object destructuring to avoid this repetitive props.
const NavigationItem = ({ onClick, href, children }) => {
  return (
    <li className="links__item">
      <a onClick={onClick} href={href} className="link">
        {children}
      </a>
    </li>
  );
};

export default NavigationItem;
