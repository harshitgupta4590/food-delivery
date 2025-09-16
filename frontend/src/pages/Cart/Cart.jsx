// 
import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, url } = useContext(StoreContext);
  const navigate = useNavigate();


  // Calculate Subtotal
  const subtotal = food_list.reduce((acc, item) => {
    if (cartItems[item._id] > 0) {
      return acc + item.price * cartItems[item._id];
    }
    return acc;
  }, 0);

  const deliveryFee = 2;
  const total = subtotal + deliveryFee;

  return (
    <div className="cart-container">
      {/* Cart Items Section */}
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Image</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />

          {food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id}>
                  <div className="cart-items-title cart-items-item">
                    <img src={url+"/images/"+item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <button onClick={() => removeFromCart(item._id)}>Remove</button>
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })}
        </div>

  {/* Cart Totals */}
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Totals</h2>
            </div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${total}</b>
            </div>
            <button
              onClick={() =>
                navigate('/order', {
            state: { subtotal, deliveryFee, total }
                })
              }
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
      <div className="cart-promocode">
        <p>If you have a promo code, enter it here</p>
        <div className="cart-promocode-input">
          <input type="text" placeholder="Promo code" />
          <button>Submit</button>
        </div>
      </div>
        </div>
      </div>
  );
  
};

export default Cart;
