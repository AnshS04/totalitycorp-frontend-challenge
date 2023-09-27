import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()
  return (
    <div style={{ textAlign: 'center' }}>
  <h1>Your Cart Items</h1>
  <div style={{ display: 'inline-block' }}>
    {PRODUCTS.map((product) => {
      if (cartItems[product.id] !== 0) {
        return <CartItem data={product} />;
      }
    })}
  </div>
  {totalAmount > 0 ? 
  <div>
    <p>Subtotal: ${totalAmount}</p>
    <button onClick={() => navigate("/")} type="button" class="btn btn-dark" style={{marginRight: "10px", marginBottom: "4px"}}>Continue Shopping</button>
    <button type="button" class="btn btn-dark" style={{ marginBottom: "4px"}}>Checkout</button>
  </div>
  : <h4>Your cart is empty</h4>}
</div>
  );
};
