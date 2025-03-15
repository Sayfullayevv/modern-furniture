import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";
import Product from "./Pages/Product";
import { products } from "./Components/Assets/all_products";
import { useRef } from "react";
import Cart from "./Pages/Cart";
function App() {

  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path="" element={<Header />} />
          <Route path="/product/:id" element={<Product products={products} />} />
          <Route path="/cart" element={<Cart products={products} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
