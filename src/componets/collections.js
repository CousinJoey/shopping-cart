import React, { useState, useEffect } from "react";
import NewCollections from "./childComponents/newCollections";
import Navbar from "./navbar";
import data from "../clothingData.json";

function Collections() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const menItems = data.men.filter((item) => item.new === "yes");
    const womensItems = data.women.filter((item) => item.new === "yes");
    const allItems = womensItems.concat(menItems);
    const newItems = allItems.filter(
      (item) => item.gender === "women" || item.gender === "men"
    );

    setItems(newItems);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="products-view-collections">
        <div id="collections-page-header">
          <p>Up to 25% off select items</p>
        </div>
      </div>
      <div className="products-view-collections">
        <div className="products-container-collections">
          <div id="clothing-items-grid">
            {items.map((item) => (
              <NewCollections key={item.title} title={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
