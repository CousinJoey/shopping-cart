import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiAccount, mdiPurse } from "@mdi/js";
import { NavLink, useNavigate } from "react-router-dom";
import { getCartData } from "./childComponents/cartData";

function Navbar() {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const cartArray = getCartData();
  const navigate = useNavigate();

  const handleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const handleDropDownExit = () => {
    setIsDropDownVisible(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const searchQuery = `?query=${searchTerm}`;
    navigate(`/search${searchQuery}`);
  };

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
            <NavLink
              to="/about"
              activeClassName="nav-link-active"
              className="nav-link"
            >
              About
            </NavLink>
          </button>
          <div id="dropdown-container">
            <button onClick={handleDropDown} className="navbar-button nav-link">
              Shop
            </button>
            {isDropDownVisible && (
              <div
                id="dropdown"
                className="dropdown-items"
                onMouseLeave={handleDropDownExit}
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
              to="/collections"
              activeClassName="nav-link-active"
              className="nav-link"
            >
              New Collections
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
        </div>
        <div
          id={
            searchTerm !== ""
              ? "search-bar-container-filled"
              : "search-bar-container"
          }
        >
          <form onSubmit={handleFormSubmit}>
            <div id="search-bar-container">
              <input
                type="text"
                placeholder="Search..."
                className={`search-bar ${
                  searchTerm !== "" ? "search-bar-filled" : ""
                }`}
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </form>
        </div>
        <div id="svg-container">
          <Icon path={mdiAccount} size={1} />
          <NavLink to="/cart">
            <Icon path={mdiPurse} size={1} />
          </NavLink>
          {cartArray.length > 0 && <div id="cart-icon">{cartArray.length}</div>}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
