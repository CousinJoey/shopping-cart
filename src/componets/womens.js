import React, { useState, useEffect } from "react";
import WomenItems from "./childComponents/womenItems";
import SidebarWomens from "./sidebarWomens";
import Navbar from "./navbar";
import data from "../clothingData.json";

function Mens() {
  const [items, setItems] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("View All");

  useEffect(() => {
    const womensItems = data.women.filter((item) => item.gender === "women");
    setItems(womensItems);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedFilter(category);
  };

  const filteredItems =
    selectedFilter === "View All"
      ? items
      : items.filter((item) => item.style.includes(selectedFilter));

  return (
    <div>
      <Navbar />
      <div className="products-view">
        <div className="products-container">
          <SidebarWomens onCategoryClick={handleCategoryClick} />
          <div id="clothing-items-grid">
            {filteredItems.map((item) => (
              <WomenItems key={item.title} title={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mens;
