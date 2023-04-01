import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar";

function ProductPage() {
  const location = useLocation();

  const [imageColor, setImageColor] = useState(location.state.article.icon);
  const [imageColor2, setImageColor2] = useState(location.state.article.icon2);

  function changeImageColor(image, image2) {
    setImageColor(image);
    setImageColor2(image2);
  }

  return (
    <div id="product-page">
      <Navbar />
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
                  onClick={() => changeImageColor(object.image, object.image2)}
                >
                  {object.name}
                </button>
              ))}
            </div>
            <div id="product-page-sizing">
              {location.state.article.sizes.map((size) => (
                <button key={size}>{size}</button>
              ))}
            </div>
            <div id="product-page-add-to-cart">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
