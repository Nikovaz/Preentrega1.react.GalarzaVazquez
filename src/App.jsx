// App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Greeting from './components/Greeting'; // Importamos el componente Greeting

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <Greeting message="Preentrega N°1" /> {/* Agregamos el componente Greeting */}
      {/* Otros componentes o contenido */}
    </>
  );
}

export default App;
