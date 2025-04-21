import React, { useState } from 'react';
import './Button.css';

const Button = ({ icon, text }) => {
  const [state, setState] = useState('default'); // default, active, viewed, hover
  
  const handleMouseEnter = () => {
    setState(prevState => (prevState === 'active' ? 'activeHover' : 'hover'));
  };

  const handleMouseLeave = () => {
    setState('default');
  };

  const handleClick = () => {
    setState('active');
  };

  const getButtonClass = () => {
    if (state === 'activeHover') return 'active hover';
    return state;
  };

  return (
    <button
      className={`button ${getButtonClass()}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </button>
  );
};

export default Button;