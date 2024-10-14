import React, { useEffect, useState } from "react";
import mockProducts from "../assets/MOCK_DATA.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import "../styles/itemlistconteiner.module.scss";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const products = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockProducts);
        }, 2000);
      });
      const filteredProducts = categoryId
        ? products.filter((product) => product.category === categoryId)
        : products;
      setProducts(filteredProducts);
      setLoading(false);
    };

    getProducts();
  }, [categoryId]);

  return (
    <div className="item-list-container">
      {loading ? (
        <div className="spinner-container">
          <ClipLoader color="#ffd700" size={150} />
          <span className="loading-text">Loading...</span>
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer