import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>E-commerce Website</h1>
      </div>

      <div className="container">
        <div className="row">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
