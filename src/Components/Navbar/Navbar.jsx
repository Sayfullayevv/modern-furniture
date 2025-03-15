import React from "react";
import "./Navbar.css";
import oasis from "../Assets/branding.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/Shopcontext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { total } = useContext(ShopContext);
  const navigate = useNavigate();

  const gotoCart = () => {
    navigate("/cart");
  };
  const Home = () =>{
    navigate('/')
  }
  return (
    <>
      <div className="navbar">
        <div className="nav_left">
            <img src={oasis} onClick={Home} style={{cursor: 'pointer'}} alt="" />
        </div>
        <div className="nav_center">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Categories</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="nav_right">
          <div
            className="cart_icon-counter"
            onClick={gotoCart}
            style={{ cursor: "pointer" }}
          >
            {" "}
            <i class="ri-shopping-cart-line"></i>
            <p>{total()}</p>
          </div>
          <button>Get Started &rarr;</button>
        </div>
      </div>
    </>
  );
}
