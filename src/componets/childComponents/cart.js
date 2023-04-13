import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import {
  getCartData,
  cartCost,
  cartSavings,
  cartWithoutSavings,
} from "./cartData";
import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";

function Cart() {
  const [cartData, setCartData] = useState(getCartData());
  const [totalPrice, setTotalPrice] = useState(cartCost());
  const [savings, setSavings] = useState(cartCost());
  const [originalPrice, setOriginalPrice] = useState(cartWithoutSavings());
  const [invalidPromo, setInvalidPromo] = useState(false);
  const [validPromo, setValidPromo] = useState(false);
  const [discount, setDiscount] = useState();

  const handleRemoveItem = (selectedId) => {
    const updatedCartData = cartData.filter((item) => item.id !== selectedId);
    localStorage.setItem("cartData", JSON.stringify(updatedCartData));
    setCartData(updatedCartData);
    setValidPromo(false);
  };

  useEffect(() => {
    setTotalPrice(cartCost());
    setSavings(cartSavings());
    setOriginalPrice(cartWithoutSavings());
    setValidPromo(false);
  }, [cartData]);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartData = [...cartData];
    updatedCartData[index].quantity = newQuantity;
    localStorage.setItem("cartData", JSON.stringify(updatedCartData));
    setCartData(updatedCartData);
  };

  const handlePromoCodeSubmit = (e) => {
    e.preventDefault();
    const promoCode = e.target.elements.promo.value;
    console.log(promoCode);
    if (validPromo === true) return;
    if (promoCode === "Bella15") {
      setInvalidPromo(false);
      setValidPromo(true);
      const newPrice = totalPrice * 0.85;
      const roundednewPrice = Math.round(newPrice * 100) / 100;
      setTotalPrice(roundednewPrice.toFixed(2));
      const amountDiscount = totalPrice * 0.25;
      const roundedDiscount = Math.round(amountDiscount * 100) / 100;
      setDiscount(roundedDiscount.toFixed(2));
    } else {
      setInvalidPromo(true);
      setValidPromo(false);
    }
  };

  return (
    <div>
      <Navbar />
      {cartData.length > 0 ? (
        <div id="checkout-page">
          <div>
            <div id="checkout-page-grid">
              {cartData.map((item, index) => (
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
                            <p className="checkout-sale-price">
                              <span className="red">{item.salePrice}</span>
                              <span className="line">{item.price}</span>
                            </p>
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
                          <button
                            className="checkout-remove"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <Icon path={mdiTrashCanOutline} size={1} />
                          </button>
                          <select
                            className="checkout-quantity"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                index,
                                parseInt(e.target.value)
                              )
                            }
                          >
                            {[...Array(10).keys()].map((num) => (
                              <option key={num + 1} value={num + 1}>
                                {num + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="checkout-sidebar">
            <div id="checkout-header">
              <p>Checkout</p>
            </div>
            <div className="checkout-details-container">
              <div className="checkout-details">
                <p>Price</p>
                <p>{originalPrice}</p>
              </div>
              {savings > 0 && (
                <div className="checkout-details">
                  <p>Total Savings</p>
                  <p className="red">-{savings}</p>
                </div>
              )}
              {validPromo && (
                <div className="checkout-details">
                  <p>15% Discount</p>
                  <p className="red">-{discount}</p>
                </div>
              )}
              <div className="checkout-details">
                <p>Shipping</p>
                <p>FREE</p>
              </div>
            </div>
            <div id="final-price-container">
              <p>Total</p>
              <p>{totalPrice}</p>
            </div>
            <div id="checkout-and-promo">
              <div id="checkout-button-container">
                <button id="checkout-button">Continue to Checkout</button>
              </div>
              <div id="promo-container">
                <form onSubmit={handlePromoCodeSubmit}>
                  <input id="promo" type="text" placeholder="PROMO CODE" />
                  <button type="submit">Enter</button>
                </form>
              </div>
            </div>
            <div id="promo-message">
              {invalidPromo && (
                <p style={{ color: "red" }}>Invalid promo code</p>
              )}
              {validPromo && (
                <p style={{ color: "green" }}>15% discount was applied</p>
              )}
            </div>
            <div id="filler-container">
              <div id="filler-cards">
                <img
                  className="credit-card"
                  src="images/websiteImages/mastercard.svg"
                />
                <img
                  className="credit-card"
                  src="images/websiteImages/visa.svg"
                />
                <img
                  className="credit-card"
                  src="images/websiteImages/paypal.svg"
                />
                <img
                  className="credit-card"
                  src="images/websiteImages/amex.svg"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="empty-cart-container">
          <div>
            <p>Uh oh! It looks like your cart is empty!</p>
          </div>
          <div>
            <p>
              Please feel free to browse around our{" "}
              <span className="red">stylish</span> and{" "}
              <span className="red">sustainable</span> fashion selections!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
