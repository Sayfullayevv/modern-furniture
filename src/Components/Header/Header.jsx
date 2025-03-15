import React from "react";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import headerImage from '../Assets/image.png'
import './Header.css'
import Products from "../Products/Products";

export default function Header() {
  return (
    <>
      <Navbar />
      <div className="header">
        <div className="header-top">
          <p>FURNITURE STORE</p>
          <span>
            Discover the Artistry of Modern <br />Contemporary Furniture
          </span>
          <p>
            Experience the elegance and functionality of cutting-edge design
            where luxury meets innovation in every piece for <br />ultimate relaxation
          </p>
        </div>
        <div className="header-bottom">
            <img src={headerImage} width='1230px' alt="" />
        </div>
      </div>
      <Products/>
    </>
  );
}
