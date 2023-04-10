import "../style.css";
import React from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div id="homepage">
        <div id="main-image-and-text-container">
          <div id="main-image-container">
            <img
              id="main-image"
              src={"/images/websiteImages/homepage-main5.png"}
            />
            <div id="main-image-overlay">
              <p className="collection-main-text">
                {" "}
                New <span className="red">Spring 2023</span> Collections{" "}
              </p>
              <Link to="collections">
                <button className="homepage-button">Shop Now</button>
              </Link>
              <div id="promo-code-container">
                <p className="promo-code">
                  Get Up to <span className="red">15%</span> Off When Using{" "}
                  <span className="red">Bella15</span> Code
                </p>
                <p className="promo-code">Bella15 at Checkout!</p>
              </div>
            </div>
          </div>
        </div>
        <div id="homepage-pictures">
          <div id="filler-text-container">
            <p id="filler-text">
              Shop how <span className="red">you</span> want to
            </p>
          </div>
          <div id="homepage-pictures-container">
            <div className="homepage-image-container">
              <img
                className="homepage-images"
                id="homepage-men"
                src={"/images/websiteImages/homepage-men.png"}
              />
              <div className="buttons-overlay">
                <Link to="mens">
                  <button className="homepage-button">Men</button>
                </Link>
              </div>
            </div>
            <div className="homepage-image-container">
              <img
                className="homepage-images"
                id="homepage-accesories"
                src={"/images/websiteImages/homepage-accesories.png"}
              />
              <div className="buttons-overlay">
                <Link to="/accesories">
                  <button className="homepage-button">Accessories</button>
                </Link>
              </div>
            </div>
            <div className="homepage-image-container">
              <img
                className="homepage-images"
                id="homepage-women"
                src={"/images/websiteImages/homepage-women.png"}
              />
              <div className="buttons-overlay">
                <Link to="/womens">
                  <button className="homepage-button">Women</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
