import React, { useState } from 'react';
import cart from '../assets/cart.svg';
import '../styles/cartwidget.scss';

const CartWidget = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 25) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="cart-widget">
      <div className="quantity-controls">
        <button onClick={handleDecrement} className="control-button">-</button>
        <span className="quantity">{count}</span>
        <button onClick={handleIncrement} className="control-button">+</button>
      </div>
      <img src={cart} alt="cart" className="cart-icon" />
    </div>
  );
};

export default CartWidget;
