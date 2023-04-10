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
          <p onClick={() => onCategoryClick("Tops")}>Tops</p>
          <p onClick={() => onCategoryClick("Sweaters")}>Hoodies & Sweaters</p>
          <p onClick={() => onCategoryClick("Pants")}>Pants</p>
          <p onClick={() => onCategoryClick("Skirts")}>Skirts</p>
          <p onClick={() => onCategoryClick("Dresses")}>Dresses</p>
        </div>
      </div>
    );
  }
}

SidebarWomens.propTypes = {
  onCategoryClick: PropTypes.func.isRequired,
};

export default SidebarWomens;
