import React, { useState, useEffect } from "react";
import OnSale from "./childComponents/onSale";
import Navbar from "./navbar";
import data from "../clothingData.json";

function Sale() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const menItems = data.men.filter((item) => item.sale === "yes");
    const womensItems = data.women.filter((item) => item.sale === "yes");
    const allItems = womensItems.concat(menItems);
    const saleItems = allItems.filter(
      (item) => item.gender === "women" || item.gender === "men"
    );

    setItems(saleItems);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="products-view-sale">
        <div id="sale-page-header">
          <p>Up to 25% off select items</p>
        </div>
        <div className="products-container-sale">
          <div id="clothing-items-grid-sale">
            {items.map((item) => (
              <OnSale key={item.title} title={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;
