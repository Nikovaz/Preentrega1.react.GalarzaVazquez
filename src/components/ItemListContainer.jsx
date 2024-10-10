import React from 'react'
import products from "../assets/MOCK_DATA.json"
import ItemList from "./ItemList"

const ItemListContainer = () => {
  
  console.log(products)

  return<ItemList products={products}/>
};

export default ItemListContainer;
