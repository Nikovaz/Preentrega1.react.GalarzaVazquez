import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartProvider';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import mockProducts from "../assets/MOCK_DATA.json"; 
import styles from '../styles/itemDetailContainer.module.scss'; 

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [item, setItem] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1); 

  useEffect(() => {
    const foundItem = mockProducts.find((product) => product.id === parseInt(id));
    setItem(foundItem);
  }, [id]);

  const handleAddToCart = () => {
    if (item && selectedColor && selectedSize) {
      const itemToAdd = {
        ...item,
        selectedColor,
        selectedSize,
        quantity, 
      };
      addToCart(itemToAdd);
      console.log('Producto agregado al carrito con color, talla y cantidad:', itemToAdd);
    } else {
      console.log('Por favor selecciona un color y una talla.');
    }
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1>{item.title}</h1>
      <Carousel showArrows={true} showThumbs={true} infiniteLoop={true} useKeyboardArrows={true}>
        {item.URLimg.map((img, index) => (
          <div key={index} className={styles.carouselItem}>
            <img src={img} alt={item.title} />
          </div>
        ))}
      </Carousel>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <div>
        <label>Color:</label>
        <select onChange={(e) => setSelectedColor(e.target.value)} value={selectedColor}>
          <option value="">Selecciona un color</option>
          {item.colors && item.colors.split(', ').map((color, index) => (
            <option key={index} value={color}>{color}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Talla:</label>
        <select onChange={(e) => setSelectedSize(e.target.value)} value={selectedSize}>
          <option value="">Selecciona una talla</option>
          {item.talles && item.talles.split(', ').map((size, index) => (
            <option key={index} value={size}>{size}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Cantidad:</label>
        <input
          type="number"
          min="1"
          max={item.stock}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;
