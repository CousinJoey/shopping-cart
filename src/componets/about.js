import React, { Component } from "react";
import Navbar from "./navbar";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <p>This is the about page</p>
      </div>
    );
  }
}

export default About;
