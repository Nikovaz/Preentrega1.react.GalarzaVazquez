import React, { useState } from 'react';
import cart from '../assets/cart.svg'; 
import '../styles/cartwidget.scss'; 

const CartWidget = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="cart-widget">
      <button onClick={handleDecrement}>-</button>
      <span>({count})</span>
      <button onClick={handleIncrement}>+</button>
      <img src={cart} alt="cart" />
    </div>
  );
};

export default CartWidget;
