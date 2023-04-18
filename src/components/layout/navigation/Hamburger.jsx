/* eslint-disable react/prop-types */
import React from 'react';

import './Hamburger.scss';

const NavigationList = ({ menuImg, onToggleMenu, toggle }) => {
  // Changed the button to be more accessible
  return (
    <button
      id="btn-menu"
      aria-expanded={toggle}
      aria-label="Menu"
      onClick={onToggleMenu}
      // Sets which element is going to be controled from this button
      aria-controls="navigationLinks"
      title="Open and Close Navigation"
    >
      <img src={menuImg} alt="menu" />
    </button>
  );
};

export default NavigationList;
