import React from "react";
import { Routes, Route } from "react-router-dom";
import NavHeader from "./components/Navbar/Navbar.js";
import Products from "./components/Products/Products.js";
import ProductDetail from "./components/ProductDetail/ProductDetail.js";
import Cart from "./components/Cart/Cart.js";
import "./App.css";

function App() {
  return (
    <div>
      <NavHeader />
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
