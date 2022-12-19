import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavHeader from './components/Navbar/Navbar';
import Products  from './components/Products/Products';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
  return (
    <div>
      <NavHeader />
      <Routes>
        <Route exact path='/' element={<Products />} />
        <Route path='product/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
