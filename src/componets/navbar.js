import React, { Component } from "react";
import Icon from "@mdi/react";
import { mdiAccount, mdiCart } from "@mdi/js";
import { Link } from "react-router-dom";
import { getCartData } from "./childComponents/cartData";

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
    const cartArray = getCartData();

    return (
      <div id="navbar">
        <div id="navbar-container">
          <h1 id="title">
            <Link to="/">Bella</Link>
          </h1>
          <div id="nav-button-container">
            <button>
              <Link to="/">Home</Link>
            </button>
            <div id="dropdown-container">
              <button onClick={this.handleDropDown}>Shop</button>
              {this.state.isDropDownVisible && (
                <div
                  id="dropdown"
                  className="dropdown-items"
                  onMouseLeave={this.handleDropDownExit}
                >
                  <p className="dropdown-clickables">
                    <Link to="/mens">Mens</Link>
                  </p>
                  <p className="dropdown-clickables">
                    <Link to="/womens">Womens</Link>
                  </p>
                  <p className="dropdown-clickables">
                    <Link to="/accesories">Accesories</Link>
                  </p>
                </div>
              )}
            </div>
            <button>
              <Link to="/about">About</Link>
            </button>
            <button>
              <Link to="/sales">On Sale</Link>
            </button>
            <button>
              <Link to="/collections">New Collections</Link>
            </button>
          </div>
          <div id="svg-container">
            <Icon path={mdiAccount} size={1} />
            <Link to="/cart">
              <Icon path={mdiCart} size={1} />
            </Link>
            {cartArray.length > 0 && (
              <div id="cart-icon">{cartArray.length}</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
