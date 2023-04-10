import React, { useState, useEffect } from "react";
import OnSale from "./childComponents/onSale";
import Navbar from "./navbar";
import data from "../clothingData.json";
import SidebarSale from "./sidebarSale";

function Sale() {
  const [gender, setGender] = useState("both");
  const [items, setItems] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("View All");

  useEffect(() => {
    if (gender === "men") {
      const menItems = data.men.filter((item) => item.sale === "yes");
      setItems(menItems);
    } else if (gender === "women") {
      const womensItems = data.women.filter((item) => item.sale === "yes");
      setItems(womensItems);
    } else {
      const menItems = data.men.filter((item) => item.sale === "yes");
      const womensItems = data.women.filter((item) => item.sale === "yes");
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
      <div className="products-view-sale">
        <div id="sale-page-header">
          <div id="sale-page-image-container">
            <img
              id="sale-page-image"
              src="/images/websiteImages/sale-header-img.png"
            />
          </div>
          <div id="sale-header-text-container">
            <p id="sale-header-text">
              Up to <span className="yellow">25%</span> off select items
            </p>
          </div>
        </div>
        <div id="main-sale-page">
          <SidebarSale
            onCategoryClick={handleCategoryClick}
            onGenderFilter={handleGenderSelection}
          />
          <div className="products-container-sale">
            <div id="clothing-items-grid-sale">
              {filteredItems.map((item) => (
                <OnSale key={item.title} title={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;
