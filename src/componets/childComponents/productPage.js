import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar";
import uniquid from "uniquid";
import { addToCart, getCartData } from "./cartData";

function ProductPage() {
  const location = useLocation();

  const [cartCount, setCartCount] = useState(getCartData().length);

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
        <div id="product-page-buttons">
          <div id="product-page-button-container">
            <div id="product-page-colors">
              {location.state.article.colors.map((object) => (
                <button
                  key={object.name}
                  onClick={() =>
                    changeImageColor(object.image, object.image2, object.name)
                  }
                >
                  {object.name}
                </button>
              ))}
            </div>
            <div id="product-page-sizing">
              {location.state.article.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={selectedSize === size ? "selected" : ""}
                >
                  {size}
                </button>
              ))}
            </div>
            <div id="product-page-add-to-cart">
              <button onClick={handleAddToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
