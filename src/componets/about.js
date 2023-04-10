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
        <div id="about">
          <div id="heading-about-container">
            <p className="heading-about">
              Welcome to Bel<span className="red">la</span>, a fashion brand
              committed to bringing you stylish and sustainable clothing
            </p>
            <p className="heading-about">
              Our brand was founded in 2010 by a team of passionate individuals
              who believed that fashion can be beautiful and ethical at the same
              time
            </p>
          </div>
          <div id="about-page-container">
            <div id="history">
              <div id="history-container" className="about-container">
                <div className="about-image-container">
                  <img
                    className="about-image"
                    id="history-image"
                    src={"/images/websiteImages/history.jpg"}
                  />
                </div>
                <div className="about-text-container">
                  <p className="about-text about-title">History</p>
                  <p className="about-text">
                    Our journey began with a small store in New York City, where
                    we sold handmade garments made from organic cotton and other
                    eco-friendly materials. The response was overwhelming, and
                    we soon expanded to other cities in the US.
                  </p>
                </div>
              </div>
            </div>
            <div id="sustainability">
              <div id="sustainability-container" className="about-container">
                <div className="about-text-container">
                  <p className="about-text about-title">Sustainability</p>
                  <p className="about-text">
                    Our materials are carefully sourced from sustainable and
                    ethical suppliers, ensuring that we minimize our impact on
                    the environment while supporting local communities. We use a
                    range of sustainable materials such as organic cotton,
                    recycled polyester, and Tencel to create our stylish and
                    comfortable clothing.
                  </p>
                </div>
                <div className="about-image-container">
                  <img
                    className="about-image"
                    id="sustainability-image"
                    src={"/images/websiteImages/sustainability.jpg"}
                  />
                </div>
              </div>
            </div>
            <div id="mission">
              <div id="mission-container" className="about-container">
                <div className="about-image-container">
                  <img
                    className="about-image"
                    id="mission-image"
                    src={"/images/websiteImages/mission.jpg"}
                  />
                </div>
                <div className="about-text-container">
                  <p className="about-text about-title">Our Mission</p>
                  <p className="about-text">
                    At Bel<span className="red">la</span>, we believe that
                    sustainability is not just a buzzword, but a responsibility.
                    Our mission is to create fashionable clothing that is kind
                    to the planet and to the people who make it. We are
                    committed to reducing our carbon footprint, promoting
                    ethical labor practices, and creating a better world through
                    fashion.
                  </p>
                </div>
              </div>
            </div>
            <div id="closing-statement-container">
              <p id="closing-statement">
                Thank you for choosing Bel<span className="red">la</span>, and
                we hope you enjoy our sustainable and stylish clothing
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
