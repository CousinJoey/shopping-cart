import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar";
import uniquid from "uniquid";
import { addToCart, getCartData } from "./cartData";
import Icon from "@mdi/react";
import { mdiStorefrontOutline } from "@mdi/js";
import { mdiInformation } from "@mdi/js";

function ProductPage() {
  const location = useLocation();

  const [cartCount, setCartCount] = useState(getCartData().length);

  const [showSizeDropdown, setShowSizeDropdown] = useState(false);

  const [imageColor, setImageColor] = useState(location.state.article.icon);
  const [imageColor2, setImageColor2] = useState(location.state.article.icon2);
  const [colorName, setColorName] = useState(
    location.state.article.colors[0].name
  );
  const [selectedSize, setSelectedSize] = useState("");

  function handleAddToCart() {
    if (selectedSize !== "") {
      const newItem = {
        id: uniquid(),
        name: location.state.article.title,
        size: selectedSize,
        image: imageColor,
        color: colorName,
        price: location.state.article.price,
        sale: location.state.article.sale,
      };

      if (location.state.article.sale === "yes") {
        newItem.salePrice = location.state.article.salePrice;
      }

      addToCart(newItem);
      setCartCount(getCartData().length);
    }
  }

  function changeImageColor(image, image2, colorName) {
    setImageColor(image);
    setImageColor2(image2);
    setColorName(colorName);
  }

  function handleDropdownClick() {
    setShowSizeDropdown(!showSizeDropdown);
  }

  function handleSizeSelect(size) {
    setSelectedSize(size);
    setShowSizeDropdown(false);
  }

  return (
    <div id="product-page">
      <Navbar cartCount={cartCount} />
      <div id="product-page-container">
        <div id="product-page-image">
          <img
            src={imageColor}
            alt={location.state.article.title}
            style={{ width: "auto", height: "700px" }}
          />
          <img
            src={imageColor2}
            alt={location.state.article.title}
            style={{ width: "auto", height: "700px" }}
          />
        </div>
        <div id="right-side-product">
          <div id="product-info-container">
            {location.state.article.sale === "yes" ? (
              <div>
                <p className="product-page-text">
                  {location.state.article.title}
                </p>
                <p className="product-page-text">
                  <span className="red">
                    {location.state.article.salePrice}{" "}
                  </span>
                  <span className="sale-price">
                    {location.state.article.price}
                  </span>{" "}
                </p>
              </div>
            ) : (
              <div>
                <p className="product-page-text">
                  {location.state.article.title}
                </p>
                <p className="product-page-text">
                  {location.state.article.price}
                </p>
              </div>
            )}
          </div>
          <div id="product-page-buttons">
            <div id="product-page-button-container">
              <div id="colors-text">
                <p>Colors:</p>
              </div>
              <div id="product-page-colors">
                {location.state.article.colors.map((object) => (
                  <button
                    className="product-color-button"
                    key={object.name}
                    onClick={() =>
                      changeImageColor(object.image, object.image2, object.name)
                    }
                  >
                    {object.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div id="product-page-sizing-and-add-to-cart">
            <div id="product-page-sizing-dropdown-container">
              <div
                className="product-page-sizing-dropdown-header"
                onClick={handleDropdownClick}
              >
                {selectedSize !== "" ? selectedSize : "Select Size"}
                <i className={`arrow ${showSizeDropdown ? "open" : null}`} />
              </div>
              {showSizeDropdown && (
                <div className="product-page-sizing-dropdown-list">
                  {location.state.article.sizes.map((size) => (
                    <div
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={`product-page-sizing-dropdown-list-item ${
                        selectedSize === size ? "selected" : null
                      }`}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div id="product-page-add-to-cart">
              <button id="add-to-cart-button" onClick={handleAddToCart}>
                Add to cart
              </button>
            </div>
          </div>
          <div id="product-page-filler-container">
            <div className="product-filler">
              <Icon path={mdiStorefrontOutline} size={1} />
              <p>Find in store</p>
            </div>
            <div className="product-filler">
              <Icon path={mdiInformation} size={1} />
              <p>Members get free online returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
