import React, { Component } from "react";
import Navbar from "./navbar";

class Sales extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <p>This is the sales page</p>
      </div>
    );
  }
}

export default Sales;
