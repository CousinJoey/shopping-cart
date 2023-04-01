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
          <p onClick={() => onCategoryClick("shirt")}>T-shirts</p>
          <p onClick={() => onCategoryClick("sweater")}>Hoodies & Sweaters</p>
          <p onClick={() => onCategoryClick("pants")}>Pants</p>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  onCategoryClick: PropTypes.func.isRequired,
};

export default Sidebar;
