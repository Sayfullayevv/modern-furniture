import React from "react";
import "./Products.css";
import { products } from "../../Components/Assets/all_products";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <div className="products">
        <div className="products-heading">
          <span>Top Products</span>
        </div>
        <div className="all_product">
          {products.map((e) => {
            return (
              <div>
                <Link to={`/product/${e.productId}`}>
                  <img src={e.productImage} alt="" />
                </Link>
                <div className="pr_name">
                  <p>{e.productName}</p>
                  <p>{e.productPrice}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
