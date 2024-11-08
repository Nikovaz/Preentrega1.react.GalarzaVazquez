import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { useCart } from '../context/CartProvider';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/itemDetailContainer.module.scss';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        console.error('No ID provided');
        return;
      }
      setLoading(true);
      try {
        const collections = ['boxer', 'medias'];
        let productFound = false;

        for (let collectionName of collections) {
          const docRef = doc(db, collectionName, id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            data.URLimg = data.URLimg.split(',').map(url => url.trim());
            data.colors = data.colors.split(',').map(color => color.trim());
            data.talles = data.talles.split(',').map(size => size.trim());
            setProduct({ id: docSnap.id, ...data });
            productFound = true;
            console.log(`Producto encontrado en la colección ${collectionName}:`, data);
            break;
          }
        }

        if (!productFound) {
          console.log('No se encontró el producto.');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    const productToAdd = { ...product, selectedColor, selectedSize };
    addToCart(productToAdd);
    console.log('Producto añadido al carrito:', productToAdd);
  };

  const handleBuyNow = () => {
    const productToAdd = { ...product, selectedColor, selectedSize };
    addToCart(productToAdd);
    navigate('/checkout');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="item-detail-container">
      <h1>{product.title}</h1>
      <Carousel 
        showArrows={true} 
        showThumbs={true} 
        infiniteLoop={true} 
        useKeyboardArrows={true}
        className="carousel"
      >
        {product.URLimg.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Product ${index}`} />
          </div>
        ))}
      </Carousel>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <div>
        <label htmlFor="colors">Color:</label>
        <select id="colors" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
          <option value="">Selecciona un color</option>
          {product.colors.map((color, index) => (
            <option key={index} value={color}>{color}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="sizes">Talla:</label>
        <select id="sizes" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
          <option value="">Selecciona una talla</option>
          {product.talles.map((size, index) => (
            <option key={index} value={size}>{size}</option>
          ))}
        </select>
      </div>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
      <button onClick={handleBuyNow}>Comprar Ahora</button>
    </div>
  );
};

export default ItemDetailContainer;
