import React, { useState } from "react";
import PropTypes from "prop-types";

function SidebarSale({ onCategoryClick, onGenderFilter }) {
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
    <div id="sidebar-container">
      <div id="sidebar">
        <div id="men-onsale-sidebar">
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
            <div id="men-onsale-filter">
              <p
                className="filter-text"
                onClick={() => onCategoryClick("View All")}
              >
                View All
              </p>
              <p
                className="filter-text"
                onClick={() => onCategoryClick("Shirts")}
              >
                Shirts
              </p>
              <p
                className="filter-text"
                onClick={() => onCategoryClick("Sweaters")}
              >
                Hoodies & Sweaters
              </p>
              <p
                className="filter-text"
                onClick={() => onCategoryClick("Pants")}
              >
                Pants
              </p>
            </div>
          )}
        </div>
        <div id="women-onsale-sidebar">
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
            <div id="women-onsale-filter">
              <p
                className="filter-text"
                onClick={() => onCategoryClick("View All")}
              >
                View All
              </p>
              <p
                className="filter-text"
                onClick={() => onCategoryClick("Tops")}
              >
                Tops
              </p>
              <p
                className="filter-text"
                onClick={() => onCategoryClick("Pants")}
              >
                Pants
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

SidebarSale.propTypes = {
  onCategoryClick: PropTypes.func.isRequired,
  onGenderFilter: PropTypes.func.isRequired,
};

export default SidebarSale;
