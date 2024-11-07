import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import Layout from './components/Layout';
import NotFound from './components/Notfound';
import ItemDetailContainer from './components/ItemDetailContainer'; // Verifica que la ruta y el nombre sean correctos
import ThemeProvider from "./context/ThemeProvider";
import CartProvider from "./context/CartProvider";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout"; // Importa el componente de Checkout

function App() {
  return (
    <CartProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/checkout" element={<Checkout />} /> {/* Agrega la ruta de Checkout */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
