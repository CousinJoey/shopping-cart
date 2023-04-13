import React, { useState, useEffect } from "react";
import AccesoriesItems from "./childComponents/accesoriesItems";
import Navbar from "./navbar";
import data from "../clothingData.json";
import SidebarAccesories from "./sidebarAccesories";

function Accesories() {
  const [gender, setGender] = useState("both");
  const [items, setItems] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("View All");

  useEffect(() => {
    if (gender === "men") {
      const menItems = data.accessories.filter((item) => item.gender === "men");
      setItems(menItems);
    } else if (gender === "women") {
      const womensItems = data.accessories.filter(
        (item) => item.gender === "women"
      );
      setItems(womensItems);
    } else {
      const allItems = data.accessories;

      setItems(allItems);
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
      <div className="products-view-accesories">
        <div id="main-accesories-page">
          <SidebarAccesories
            onCategoryClick={handleCategoryClick}
            onGenderFilter={handleGenderSelection}
          />
          <div id="clothing-items-grid">
            {filteredItems.map((item) => (
              <AccesoriesItems
                key={item.title}
                title={item.title}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accesories;
