import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    console.log('Agregar al carrito:', item);
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    console.log('Eliminar del carrito:', itemId);
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const incrementItem = (itemId) => {
    console.log('Incrementar cantidad de item:', itemId);
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementItem = (itemId) => {
    console.log('Decrementar cantidad de item:', itemId);
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, incrementItem, decrementItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
