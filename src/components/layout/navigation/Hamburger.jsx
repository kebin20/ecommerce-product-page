/* eslint-disable react/prop-types */
import React from "react";

const NavigationList = (props) => {
  return (
    <>
      <button onClick={props.onToggleHamburgerMenu} className="hamburger-menu">
        <span className={`${props.toggle && "open"} hamburger-top`}></span>
        <span className={`${props.toggle && "open"} hamburger-middle`}></span>
        <span className={`${props.toggle && "open"} hamburger-bottom`}></span>
      </button>
    </>
  );
};

export default NavigationList;
