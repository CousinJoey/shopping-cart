import React, { Component } from "react";
import Navbar from "./navbar";

class Accesories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <p>This is the Accesories page</p>
      </div>
    );
  }
}

export default Accesories;
