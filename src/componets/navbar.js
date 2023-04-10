import React, { Component } from "react";
import Icon from "@mdi/react";
import { mdiAccount, mdiPurse } from "@mdi/js";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/">
              BEL<span className="red">LA</span>
            </NavLink>
          </h1>
          <div id="nav-button-container">
            <button className="navbar-button">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </button>
            <div id="dropdown-container">
              <button
                onClick={this.handleDropDown}
                className="navbar-button nav-link"
              >
                Shop
              </button>
              {this.state.isDropDownVisible && (
                <div
                  id="dropdown"
                  className="dropdown-items"
                  onMouseLeave={this.handleDropDownExit}
                >
                  <p className="dropdown-clickables nav-link">
                    <NavLink to="/mens">Mens</NavLink>
                  </p>
                  <p className="dropdown-clickables nav-link">
                    <NavLink to="/womens">Womens</NavLink>
                  </p>
                  <p className="dropdown-clickables nav-link">
                    <NavLink to="/accesories">Accesories</NavLink>
                  </p>
                </div>
              )}
            </div>
            <button className="navbar-button">
              <NavLink
                to="/about"
                activeClassName="nav-link-active"
                className="nav-link"
              >
                About
              </NavLink>
            </button>
            <button className="navbar-button">
              <NavLink
                to="/sales"
                activeClassName="nav-link-active"
                className="nav-link"
              >
                On Sale
              </NavLink>
            </button>
            <button className="navbar-button">
              <NavLink
                to="/collections"
                activeClassName="nav-link-active"
                className="nav-link"
              >
                New Collections
              </NavLink>
            </button>
          </div>
          <div id="svg-container">
            <Icon path={mdiAccount} size={1} />
            <NavLink to="/cart">
              <Icon path={mdiPurse} size={1} />
            </NavLink>
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
