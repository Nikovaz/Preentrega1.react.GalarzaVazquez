import React from 'react';
import styles from '../styles/item.module.scss';
import CartWidget from './cartWidget';
import { NavLink } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div className={styles.container}>
      <img src={item.URLimg} alt={item.title} />
      <h2>{item.title}</h2>
      <span>${item.price}</span>
      <NavLink to={`/detail/${item.id}`}>
        <button className={styles.button}>Detail</button>
      </NavLink>
    </div>
  );
}

export default Item;
