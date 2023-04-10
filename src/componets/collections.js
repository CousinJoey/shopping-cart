import React, { useState, useEffect } from "react";
import NewCollections from "./childComponents/newCollections";
import Navbar from "./navbar";
import data from "../clothingData.json";
import SidebarCollections from "./sidebarCollections";

function Collections() {
  const [gender, setGender] = useState("both");
  const [items, setItems] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("View All");

  useEffect(() => {
    if (gender === "men") {
      const menItems = data.men.filter((item) => item.new === "yes");
      setItems(menItems);
    } else if (gender === "women") {
      const womensItems = data.women.filter((item) => item.new === "yes");
      setItems(womensItems);
    } else {
      const menItems = data.men.filter((item) => item.new === "yes");
      const womensItems = data.women.filter((item) => item.new === "yes");
      const allItems = womensItems.concat(menItems);
      const saleItems = allItems.filter(
        (item) => item.gender === "women" || item.gender === "men"
      );

      setItems(saleItems);
    }
  }, [gender]);

  const handleGenderSelection = (gender) => {
    setGender(gender);
    setSelectedFilter("View All");
  };

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
      <div className="products-view-collections">
        <div id="collections-page-header">
          <div id="collections-page-image-container">
            <img
              id="collections-page-image"
              src="/images/websiteImages/collections-header.jpg"
            />
          </div>
          <div id="collections-header-text-container">
            <p id="collections-header-text">
              Our New 2023 <span className="red">Spring</span> Collection
            </p>
          </div>
        </div>
        <div id="main-collections-page">
          <SidebarCollections
            onCategoryClick={handleCategoryClick}
            onGenderFilter={handleGenderSelection}
          />
          <div id="clothing-items-grid">
            {filteredItems.map((item) => (
              <NewCollections key={item.title} title={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
