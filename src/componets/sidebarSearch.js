import React from "react";
import PropTypes from "prop-types";

function SidebarSearch({ onCategoryClick }) {
  return (
    <div id="sidebar-container">
      <div id="sidebar">
        <div id="men-onsale-sidebar">
          <p
            className="no-underline"
            onClick={() => {
              onCategoryClick("men");
            }}
          >
            Men
          </p>
        </div>
        <div id="women-onsale-sidebar">
          <p
            className="no-underline"
            onClick={() => {
              onCategoryClick("women");
            }}
          >
            Women
          </p>
        </div>
      </div>
    </div>
  );
}

SidebarSearch.propTypes = {
  onCategoryClick: PropTypes.func.isRequired,
};

export default SidebarSearch;
