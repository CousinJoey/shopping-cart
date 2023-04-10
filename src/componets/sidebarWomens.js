import React, { useState } from "react";
import PropTypes from "prop-types";

function SidebarWomens({ onCategoryClick }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    onCategoryClick(category);
  };

  const changeUnderline = (name) => {
    setSelectedCategory(name);
  };

  const categories = [
    { name: "View All", key: "View All" },
    { name: "Tops", key: "Tops" },
    { name: "Hoodies & Sweaters", key: "Sweaters" },
    { name: "Pants", key: "Pants" },
    { name: "Dresses", key: "Dresses" },
  ];

  return (
    <div id="sidebar-container">
      <div id="sidebar">
        {categories.map((category) => (
          <p
            key={category.key}
            className={
              selectedCategory === category.name ? "underline" : "no-underline"
            }
            onClick={() => {
              handleCategoryClick(category.key);
              changeUnderline(category.name);
            }}
          >
            {category.name}
          </p>
        ))}
      </div>
    </div>
  );
}

SidebarWomens.propTypes = {
  onCategoryClick: PropTypes.func.isRequired,
};

export default SidebarWomens;
