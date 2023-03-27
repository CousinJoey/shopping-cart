import React, { Component } from "react";
import Icon from "@mdi/react";
import { mdiAccount, mdiCart } from "@mdi/js";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropDownVisible: false,
    };
  }

  handleDropDown = () => {
    this.setState({ isDropDownVisible: !this.state.isDropDownVisible });
  };

  handleDropDownExit = () => {
    this.setState({ isDropDownVisible: false });
  };

  render() {
    return (
      <div>
        <div id="navbar-container">
          <h1 id="title">Bella</h1>
          <div id="nav-button-container">
            <button>Home</button>
            <div id="dropdown-container">
              <button onClick={this.handleDropDown}>Shop</button>
              {this.state.isDropDownVisible && (
                <div
                  id="dropdown"
                  className="dropdown-items"
                  onMouseLeave={this.handleDropDownExit}
                >
                  <p className="dropdown-clickables">Mens</p>
                  <p className="dropdown-clickables">Womens</p>
                  <p className="dropdown-clickables">Accessories</p>
                </div>
              )}
            </div>
            <button>About</button>
            <button>On Sale</button>
            <button>New Collections</button>
          </div>
          <div id="svg-container">
            <Icon path={mdiAccount} size={1} />
            <Icon path={mdiCart} size={1} />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
