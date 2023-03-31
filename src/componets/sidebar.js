import React, { Component } from "react";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="sidebar-container">
        <div id="sidebar">
          <p>View All</p>
          <p>T-shirts</p>
          <p>Hoodies</p>
          <p>Sweaters</p>
          <p>Pants</p>
          <p>Shorts</p>
        </div>
      </div>
    );
  }
}

export default Sidebar;
