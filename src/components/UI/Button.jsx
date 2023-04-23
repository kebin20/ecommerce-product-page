/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({ src, onClick, title, ariaLabel, className }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      title={title}
    >
      <img src={src} alt={title} />
    </button>
  );
};

export default Button;
