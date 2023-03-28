import React, { Component } from "react";
import Navbar from "./navbar";

class Mens extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <p>This is the mens section</p>
      </div>
    );
  }
}

export default Mens;
