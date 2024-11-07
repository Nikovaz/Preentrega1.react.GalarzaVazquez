import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/item.module.scss';
import { NavLink } from 'react-router-dom';

const Item = ({ item }) => {
  const imageUrl = Array.isArray(item.URLimg) ? item.URLimg[0] : item.URLimg;
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={item.title} /> 
      <h2>{item.title}</h2>
      <span>${item.price}</span>
      <NavLink to={`/detail/${item.id}`}>
        <button className={styles.button}>Detail</button>
      </NavLink>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    URLimg: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default Item;
