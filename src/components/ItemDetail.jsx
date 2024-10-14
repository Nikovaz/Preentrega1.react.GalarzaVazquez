import React, { useState } from 'react';
import styles from '../styles/itemDetail.module.scss';
import CartWidget from './cartWidget';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ItemDetail = ({ product }) => {
  const images = Array.isArray(product.URLimg) ? product.URLimg : [];
  const items = images.map((url) => ({
    original: url,
    thumbnail: url,
  }));

  const colors = typeof product.color === 'string' ? product.color.split(', ') : [];
  const sizes = typeof product.talles === 'string' ? product.talles.split(', ') : [];

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleColorSelect = (color, index) => {
    setSelectedColor(color);
    setCurrentImageIndex(index % items.length);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageGallery}>
        <ImageGallery 
          items={items} 
          showPlayButton={true} 
          showFullscreenButton={true} 
          showThumbnails={true} 
          startIndex={currentImageIndex} 
        />
      </div>
      <div className={styles.details}>
        <h1 className={styles.title}>{product.title}</h1>
        <span className={styles.price}>${product.price}</span>
        <div className={styles.options}>
          <div className={styles.optionGroup}>
            <h3>Colores disponibles:</h3>
            <ul className={styles.list}>
              {colors.map((color, index) => (
                <li 
                  key={index} 
                  className={`${styles.optionItem} ${selectedColor === color ? styles.selected : ''}`}
                  onClick={() => handleColorSelect(color, index)}
                >
                  {color}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.optionGroup}>
            <h3>Talles disponibles:</h3>
            <ul className={styles.list}>
              {sizes.map((size, index) => (
                <li 
                  key={index} 
                  className={`${styles.optionItem} ${selectedSize === size ? styles.selected : ''}`}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.buyNow}>Comprar ahora</button>
          <button className={styles.addToCart}>Agregar al carrito</button>
        </div>
        <span className={styles.description}>{product.description}</span>
      </div>
    </div>
  );
}

export default ItemDetail;
