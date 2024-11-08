import React, { useState } from 'react';
import { useCart } from '../context/CartProvider';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, addDoc, getDocs, query, where, updateDoc, serverTimestamp, doc } from 'firebase/firestore';
import '../styles/checkout.module.scss';

const Checkout = () => {
  const { cartItems, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [customerLastName, setCustomerLastName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (customerEmail !== confirmEmail) {
      setError('Emails do not match.');
      return;
    }

    const order = {
      customerName,
      customerLastName,
      customerPhone,
      customerEmail,
      comment,
      items: cartItems,
      total: getTotalPrice(),
      date: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);

      for (const item of cartItems) {
        const q = query(collection(db, 'products'), where('id', '==', item.id));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((productDoc) => {
          const productRef = doc(db, 'products', productDoc.id);
          updateDoc(productRef, { stock: productDoc.data().stock - item.quantity });
        });
      }

      console.log('Orden de pago generada con ID: ', docRef.id);
      clearCart();
      navigate('/order-confirmation', { state: { order: { ...order, id: docRef.id } } });
    } catch (error) {
      console.error('Error al generar la orden de pago: ', error);
      setError('Error generating order.');
    }
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={customerLastName}
            onChange={(e) => setCustomerLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmEmail">Confirm Email:</label>
          <input
            type="email"
            id="confirmEmail"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment (max 100 characters):</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            maxLength="100"
          />
        </div>
        <div className="form-group">
          <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
        </div>
        <div className="form-group">
          <button type="submit">Generate Order</button>
        </div>
      </form>

      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={`${item.id}-${index}`} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ddd', padding: '10px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <img src={item.URLimg[0]} alt={item.title} style={{ width: '75px', height: '75px', marginRight: '10px', objectFit: 'cover', borderRadius: '50%' }} />
              <span style={{ fontSize: '1em', marginRight: 'auto' }}>{item.title} - ${item.price} x {item.quantity}</span>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checkout;
