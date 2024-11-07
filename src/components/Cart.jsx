import React from 'react';
import CartItem from './CartItem';
import { useCart } from '../context/CartProvider';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/cart.module.scss';

const Cart = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    console.log('Redirigir a checkout');
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return <div>Tu carrito está vacío</div>;
  }

  return (
    <div className={styles.cartContainer}>
      <h1>Tu Carrito de Compras</h1>
      {cartItems.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      <button onClick={handleBuyNow} className={styles.buyNow}>Comprar ahora</button>
    </div>
  );
};

export default Cart;
