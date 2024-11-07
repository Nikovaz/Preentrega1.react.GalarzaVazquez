import React from 'react';
import { useCart } from '../context/CartProvider';
import styles from '../styles/cartWidget.module.scss';

const CartWidget = () => {
  const { cartItems, incrementItem, decrementItem, removeFromCart } = useCart();

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>
        🛒 Carrito ({cartItems.length})
      </button>
      <div className={styles.dropdownContent}>
        {cartItems.length === 0 ? (
          <div>Tu carrito está vacío</div>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className={styles.cartItem}>
              <img src={item.URLimg} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Color: {item.selectedColor}</p>
                <p>Talla: {item.selectedSize}</p>
                <div className={styles.buttonGroup}>
                  <button onClick={() => {
                    console.log('Incrementar:', item.id);
                    incrementItem(item.id);
                  }}>+</button>
                  <button onClick={() => {
                    console.log('Decrementar:', item.id);
                    decrementItem(item.id);
                  }}>-</button>
                  <button onClick={() => {
                    console.log('Eliminar:', item.id);
                    removeFromCart(item.id);
                  }}>x</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartWidget;
