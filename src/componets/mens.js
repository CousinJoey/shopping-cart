import React, { useState, useEffect } from "react";
import MenItems from "./childComponents/menItems";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import data from "../clothingData.json";

function Mens() {
  const [items, setItems] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("View All");

  useEffect(() => {
    const mensItems = data.men.filter((item) => item.gender === "men");
    setItems(mensItems);
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
          <Sidebar onCategoryClick={handleCategoryClick} />
          <div id="clothing-items-grid">
            {filteredItems.map((item) => (
              <MenItems key={item.title} title={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mens;
