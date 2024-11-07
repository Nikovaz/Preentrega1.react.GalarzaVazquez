// components/Checkout.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartProvider';
import styles from '../styles/checkout.module.scss';

const Checkout = () => {
  const { cartItems } = useCart();
  const [paymentInfo, setPaymentInfo] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handlePayment = () => {
    console.log('Procesando pago con la siguiente información:', paymentInfo);
    alert('Pago procesado con éxito');
    // Aquí puedes añadir la lógica para procesar el pago
  };

  return (
    <div className={styles.checkoutContainer}>
      <h1>Proceso de Pago</h1>
      <div className={styles.cartSummary}>
        <h2>Resumen del Carrito</h2>
        {cartItems.map((item, index) => (
          <div key={index} className={styles.cartItem}>
            <img src={item.URLimg[0]} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Color: {item.selectedColor}</p>
              <p>Talla: {item.selectedSize}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.paymentForm}>
        <h2>Información de Pago</h2>
        <input
          type="text"
          name="name"
          placeholder="Nombre en la tarjeta"
          value={paymentInfo.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Número de la tarjeta"
          value={paymentInfo.cardNumber}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="expiryDate"
          placeholder="Fecha de expiración (MM/AA)"
          value={paymentInfo.expiryDate}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={paymentInfo.cvv}
          onChange={handleInputChange}
        />
        <button onClick={handlePayment}>Pagar</button>
      </div>
    </div>
  );
};

export default Checkout;
