import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { ClipLoader } from 'react-spinners';
import '../styles/itemlistcontainer.module.scss';
import Item from './Item'; 

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let productsFiltered = [];

        const collections = ['boxer', 'medias'];
        for (let collectionName of collections) {
          const q = categoryId
            ? query(
                collection(db, collectionName),
                where('category', '==', categoryId)
              )
            : collection(db, collectionName);

          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (typeof data.URLimg === 'string') {
              data.URLimg = data.URLimg.split(',').map((url) => url.trim());
            } else {
              data.URLimg = []; 
            }
            productsFiltered.push({ id: doc.id, ...data });
          });
        }

        setProducts(productsFiltered);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [categoryId]);

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="item-list-container">
      {loading ? (
        <div className="spinner-container">
          <ClipLoader color="#007bff" size={150} />
          <span className="loading-text">Loading...</span>
        </div>
      ) : (
        <div className="image-grid">
          {products.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
