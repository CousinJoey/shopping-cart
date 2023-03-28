import React, { Component } from "react";
import Navbar from "./navbar";

class Womens extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <p>This is the womens page</p>
      </div>
    );
  }
}

export default Womens;
