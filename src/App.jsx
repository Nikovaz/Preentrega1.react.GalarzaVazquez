import React from 'react';
import products from './assets/MOCK_DATA.json'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  console.log(products);
  return (
    <>
      <NavBar />
  
      <ItemListContainer />
   
    </>
  );
}

export default App;
