import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    width: "18rem",
    boxShadow: isHovered
      ? "0px 4px 8px rgba(0, 0, 0, 0.4)"
      : "0px 2px 4px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
  };

  return (
    <div
      className="col-md-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card my-3 mx-auto" style={cardStyle}>
        <img src={productImage} className="card-img-top mx-auto" alt="..." style={{maxHeight: "270px", maxWidth: "250px"}}/>
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <p className="card-text">${price}</p>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => addToCart(id)}
          >
            Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
          </button>
        </div>
      </div>
    </div>
  );
};
