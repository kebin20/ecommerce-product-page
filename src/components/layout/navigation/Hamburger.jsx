/* eslint-disable react/prop-types */
import React from 'react';

import './Hamburger.scss';

const NavigationList = ({ menuImg, onToggleMenu, toggle }) => {
  //Change the button to be more accessible
  return (
    <button
      id="btn-menu"
      aria-expanded={toggle}
      aria-label="Menu"
      onClick={onToggleMenu}
    >
      <img src={menuImg} alt="menu" />
    </button>

    // <button onClick={props.onToggleHamburgerMenu} className="hamburger-menu">
    //   <span className={`${props.toggle && 'open'} hamburger-top`}></span>
    //   <span className={`${props.toggle && 'open'} hamburger-middle`}></span>
    //   <span className={`${props.toggle && 'open'} hamburger-bottom`}></span>
    // </button>
  );
};

export default NavigationList;
