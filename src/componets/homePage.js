import "../style.css";
import React, { Component } from "react";
import Navbar from "./navbar";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <p id="main-text">Homepage</p>
      </div>
    );
  }
}

export default HomePage;
