import React, { Component } from "react";
import PropTypes from "prop-types";

class SidebarWomens extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onCategoryClick } = this.props;
    return (
      <div id="sidebar-container">
        <div id="sidebar">
          <p onClick={() => onCategoryClick("View All")}>View All</p>
          <p onClick={() => onCategoryClick("top")}>Tops</p>
          <p onClick={() => onCategoryClick("sweater")}>Hoodies & Sweaters</p>
          <p onClick={() => onCategoryClick("pants")}>Pants</p>
          <p onClick={() => onCategoryClick("skirt")}>Skirts</p>
          <p onClick={() => onCategoryClick("dress")}>Dresses</p>
        </div>
      </div>
    );
  }
}

SidebarWomens.propTypes = {
  onCategoryClick: PropTypes.func.isRequired,
};

export default SidebarWomens;
