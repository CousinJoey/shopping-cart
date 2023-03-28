import React, { Component } from "react";
import Navbar from "./navbar";

class Collections extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <p>This is the collections page</p>
      </div>
    );
  }
}

export default Collections;
