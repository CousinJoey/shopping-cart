import React, { useState } from "react";
import Navbar from "../navbar";
import { getCartData } from "./cartData";

function Cart() {
  const [cartData, setCartData] = useState(getCartData());

  const handleRemoveItem = (selectedId) => {
    const updatedCartData = cartData.filter((item) => item.id !== selectedId);
    localStorage.setItem("cartData", JSON.stringify(updatedCartData));
    setCartData(updatedCartData);
  };

  return (
    <div>
      <Navbar />
      <div id="checkout-page">
        <div id="checkout-page-grid">
          {cartData.map((item) => (
            <div key={item.id}>
              <div>
                <div className="checkout-item">
                  <div>
                    <img
                      src={item.image}
                      style={{ width: "150px", height: "auto" }}
                    ></img>
                  </div>
                  <div className="checkout-item-descriptions">
                    <div className="name-and-price">
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                    </div>
                    <div className="color-and-size">
                      <p>Color: {item.color}</p>
                      <p>Size: {item.size}</p>
                    </div>
                    <div className="quantity-and-remove">
                      <button onClick={() => handleRemoveItem(item.id)}>
                        Remove Item
                      </button>
                      <p>Change quantity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div id="checkout-sidebar">
          <p>This is the checkout sidebar</p>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
