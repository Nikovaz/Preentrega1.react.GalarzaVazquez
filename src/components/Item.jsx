import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../styles/item.module.scss';

const Item = ({ item }) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${item.id}`);
  };

  return (
    <div className="item">
      <div className="image-container">
        {item.URLimg && item.URLimg.length > 0 ? (
          <img src={item.URLimg[0]} alt={item.title} />
        ) : (
          <div>No image available</div>
        )}
      </div>
      <h2>{item.title}</h2>
      <p>Price: ${item.price}</p>
      <button onClick={handleDetail} className="button">Detail</button>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    URLimg: PropTypes.arrayOf(PropTypes.string), 
  }).isRequired,
};

export default Item;
