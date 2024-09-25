import React, { useState } from 'react';

import '../styles/greeting.scss'; 

const Greeting = ({ message }) => {
  const [count, setCount] = useState(0);
  const [countHover, setCountHover] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleHover = () => {
    setCountHover(prevCountHover => prevCountHover + 1);
  };

  return (
    <div className="greeting-container">
      <h1>{message}</h1>
      <button
        onClick={handleClick}
        className="greeting-button"
      >
        ¡Hola!
      </button>
      <span className="greeting-count">
        Veces que hiciste clic en ¡Hola!: {count}
      </span>
      <div
        className="greeting-hover"
        onMouseEnter={handleHover}
      >
        <span className="greeting-hover-text">
          Veces que pasaste el cursor: {countHover}
        </span>
      </div>
    </div>
  );
};

export default Greeting;
