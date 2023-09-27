import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  const cardStyle = {
    maxWidth: "640px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", 
    border: "none"
  };

  return (
    <div className="card mb-3 my-3" style={cardStyle}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={productImage}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <br/> 
            <h5 className="card-title">{productName}</h5>
            <p className="card-text">
              <small className="text-muted">${price}</small>
            </p>
            <div>
              <button
                onClick={() => removeFromCart(id)}
                style={{
                  border: "1px solid black",
                  marginRight: "5px",
                  height: "26px",
                }}
              >
                {" "}
                -{" "}
              </button>
              <input
                value={cartItems[id]}
                style={{
                  width: "55px",
                  height: "27px",
                  marginRight: "5px",
                  textAlign: "center",
                }}
                onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
              />
              <button
                onClick={() => addToCart(id)}
                style={{ border: "1px solid black", height: "26px" }}
              >
                {" "}
                +{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
