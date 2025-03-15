import React, { useState, createContext } from "react";
import { products } from "../Components/Assets/all_products";

export const ShopContext = createContext("");

const defaultCart = () => {
  let cart = {};
  for (let index = 0; index < products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(defaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));    
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const total = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        total += cartItems[item];        
      }
    }
    return total;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    products,
    total,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
