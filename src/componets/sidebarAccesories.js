import React, { useState } from "react";
import PropTypes from "prop-types";

function SidebarAccesories({ onCategoryClick, onGenderFilter }) {
  const [mensClick, setMensClick] = useState(false);
  const [womensClick, setWomensClick] = useState(false);
  const [womensUnderline, setWomensUnderline] = useState(false);
  const [mensUnderline, setMensUnderline] = useState(false);

  const handleMensClick = () => {
    setMensClick(true);
    setMensUnderline(true);
    setWomensClick(false);
    setWomensUnderline(false);
  };

  const handleWomensClick = () => {
    setMensClick(false);
    setMensUnderline(false);
    setWomensClick(true);
    setWomensUnderline(true);
  };

  return (
    <div id="sidebar-container-accesories">
      <div id="sidebar-accesories">
        <div id="men-accesories-sidebar">
          <p
            className={mensUnderline ? "underline" : "no-underline"}
            onClick={() => {
              handleMensClick();
              onGenderFilter("men");
            }}
          >
            Men
          </p>
          {mensClick === true && (
            <div id="men-accesories-filter">
              <p
                className="filter-text"
                onClick={() => onCategoryClick("View All")}
              >
                View All
              </p>
              <p
                className="filter-text"
                onClick={() => onCategoryClick("Hats")}
              >
                Hats
              </p>
              <p
                className="filter-text"
                onClick={() => onCategoryClick("Rings")}
              >
                Jewelry
              </p>
              <p
                className="filter-text"
                onClick={() => onCategoryClick("Sunglasses")}
              >
                Sunglasses
              </p>
            </div>
          )}
        </div>
        <div id="women-accesories-sidebar">
          <p
            className={womensUnderline ? "underline" : "no-underline"}
            onClick={() => {
              handleWomensClick();
              onGenderFilter("women");
            }}
          >
            Women
          </p>
          {womensClick === true && (
            <div id="women-accesories-filter">
              <p
                className="filter-text"
                onClick={() => onCategoryClick("View All")}
              >
                View All
              </p>
              <p
                className="filter-text"
                onClick={() => onCategoryClick("Rings")}
              >
                Jewelry
              </p>
              <p
                className="filter-text"
                onClick={() => onCategoryClick("Hats")}
              >
                Hats
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

SidebarAccesories.propTypes = {
  onCategoryClick: PropTypes.func.isRequired,
  onGenderFilter: PropTypes.func.isRequired,
};

export default SidebarAccesories;
