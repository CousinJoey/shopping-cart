import React, { Component } from "react";
import PropTypes from "prop-types";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onCategoryClick } = this.props;
    return (
      <div id="sidebar-container">
        <div id="sidebar">
          <p onClick={() => onCategoryClick("View All")}>View All</p>
          <p onClick={() => onCategoryClick("Shirts")}>T-shirts</p>
          <p onClick={() => onCategoryClick("Sweaters")}>Hoodies & Sweaters</p>
          <p onClick={() => onCategoryClick("Pants")}>Pants</p>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  onCategoryClick: PropTypes.func.isRequired,
};

export default Sidebar;
