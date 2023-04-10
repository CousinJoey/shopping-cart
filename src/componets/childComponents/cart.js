import React, { useState } from "react";
import Navbar from "../navbar";
import { getCartData, cartCost, cartSavings } from "./cartData";

function Cart() {
  const [cartData, setCartData] = useState(getCartData());

  const handleRemoveItem = (selectedId) => {
    const updatedCartData = cartData.filter((item) => item.id !== selectedId);
    localStorage.setItem("cartData", JSON.stringify(updatedCartData));
    setCartData(updatedCartData);
  };

  const totalPrice = cartCost();
  const savings = cartSavings();

  return (
    <div>
      <Navbar />
      <div id="checkout-page">
        {cartData.length > 0 ? (
          <div>
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
                        {item.sale === "yes" ? (
                          <div className="name-and-price">
                            <p>{item.name}</p>
                            <p className="new-price">{item.salePrice}</p>
                            <p className="sale-price">{item.price}</p>
                          </div>
                        ) : (
                          <div className="name-and-price">
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                          </div>
                        )}
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
          </div>
        ) : (
          <div id="checkout-page-grid">
            <p>There is nothing Here!</p>
          </div>
        )}
        <div id="checkout-sidebar">
          <p>This is the checkout sidebar</p>
          <button>Checkout</button>
          {totalPrice > 0 && <p>{totalPrice}</p>}
          {savings > 0 && <p>Total Savings: {savings} </p>}
        </div>
      </div>
    </div>
  );
}

export default Cart;
