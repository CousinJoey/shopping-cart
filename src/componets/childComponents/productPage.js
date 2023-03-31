import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar";

function ProductPage() {
  const location = useLocation();

  const [imageColor, setImageColor] = useState(location.state.article.icon);

  function changeImageColor(image) {
    setImageColor(image);
  }

  return (
    <div>
      <Navbar />
      <img src={imageColor} alt={location.state.article.title} />
      <div>
        {location.state.article.colors.map((object) => (
          <button
            key={object.name}
            onClick={() => changeImageColor(object.image)}
          >
            {object.name}
          </button>
        ))}
      </div>
      <div>
        {location.state.article.sizes.map((size) => (
          <button key={size}>{size}</button>
        ))}
      </div>
      <button>Add to cart</button>
    </div>
  );
}

export default ProductPage;
