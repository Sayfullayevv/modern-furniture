import React, { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/Shopcontext";
import Navbar from "../Components/Navbar/Navbar";
import emptyimg from "../Components/Assets/empty.jpg";

export default function Cart({ products }) {
  const { cartItems, total, removeFromCart } = useContext(ShopContext);

  return (
    <>
      <Navbar />
      <div className="cart">
        {products.map((e) => {
          if (cartItems[e.productId] > 0) {
            return (
              <>
                <div className="cart_items">
                  <img src={e.productImage} alt="" />
                  <span style={{fontSize: '23px'}}>{e.productName}</span>
                  <div className="pr_count" style={{display: 'flex' , justifyContent: 'space-between' , alignItems: 'center', width: '40%'}}>
                    <p style={{fontSize: '18px'}}>Price: {e.productPrice}</p>
                    <p style={{background: '#F3F4F7' , width: '30px' , height: '30px' , borderRadius: '50%', display: 'flex' , alignItems: 'center' , justifyContent: 'center'}}>{cartItems[e.productId]}</p>
                  </div>
                  <button
                    onClick={() => {
                      removeFromCart(e.productId);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
}
