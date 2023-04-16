/* eslint-disable react/prop-types */
import React from "react";

const NavigationListItem = (props) => {
  return (
    <>
      <li>
        <a
          onClick={props.onClick}
          href={props.href}
          className={props.className}
        >
          {props.children}
        </a>
      </li>
    </>
  );
};

export default NavigationListItem;
