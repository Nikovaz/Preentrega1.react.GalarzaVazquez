import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import Layout from './components/Layout';
import NotFound from './components/Notfound';
import ItemDetailContainer from './components/ItemDetailContainer';
import ThemeProvider from './context/ThemeProvider';
import CartProvider from './context/CartProvider';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation'; // Importar el componente

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
              <Route path="/detail/:id" element={<ItemDetailContainer />} /> {/* Asegúrate de que esta ruta está definida */}
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} /> {/* Agregar la ruta */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
