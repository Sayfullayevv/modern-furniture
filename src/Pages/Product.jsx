import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import "../App.css";
import { useContext } from "react";
import { ShopContext } from "../Context/Shopcontext";

export default function Product({ products }) {
  const { id } = useParams();
  const product = products.find((e) => e.productId === Number(id));
  const { addToCart , cartItems } = useContext(ShopContext);

  return (
    <>
      <Navbar />
      <div className="product">
        <img src={product.productImage} className="productImage" width={"400px"} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <p
            style={{
              fontSize: "45px",
            }}
            className="productName"
          >
            {product.productName}
          </p>
          <p
            style={{
              width: "500px",
              wordSpacing: "10px",
              lineHeight: "25px",
            }}
            className="productDesc"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            suscipit hic unde obcaecati, in dolore qui accusantium neque debitis
            earum architecto voluptatum impedit necessitatibus optio rerum
            doloremque cupiditate a illum.
          </p>
          <div className="count_product" style={{display: 'flex' , justifyContent: 'space-between', alignItems: 'center'}}>
            <p style={{ fontSize: "57px" }}>{product.productPrice}</p>
            <p style={{
              width: '40px',
              height: '40px',
              background: '#7F71DC',
              borderRadius: '50%',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>{cartItems[product.productId]}</p>
          </div>
          <button
            style={{
              width: "200px",
              padding: "10px",
              background: "#7F71DC",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
            }}
            onClick={() => {
              addToCart(product.productId);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
