import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import '../styles/itemlistcontainer.module.scss';

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

ItemList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemList;
