import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiNewBox } from "@mdi/js";

function MenItems(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const displayedImg = isHovering ? props.item.iconAlt : props.item.icon;

  let navigate = useNavigate();

  const handleClick = () => {
    let article = props.item;
    const state = { article };

    navigate(`/product/${props.item.id}`, { state });
  };

  return (
    <div id="mens-clothing-grid">
      {props.item.sale === "yes" ? (
        <div
          className="article-img-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="article-img"
            src={displayedImg}
            alt={props.item.title}
            style={{ width: "300px", height: "450px" }}
            onClick={handleClick}
          />
          <div className="red-overlay">
            <p className="overlay-text">Sale</p>
          </div>
        </div>
      ) : props.item.new === "yes" ? (
        <div
          className="article-img-container-new"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="article-img-new "
            src={displayedImg}
            alt={props.item.title}
            style={{ width: "300px", height: "450px" }}
            onClick={handleClick}
          />
          <Icon path={mdiNewBox} size={2} className="new-overlay" />
        </div>
      ) : (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img
            src={displayedImg}
            alt={props.item.title}
            style={{ width: "300px", height: "450px" }}
            onClick={handleClick}
          />
        </div>
      )}
      <div>
        {props.item.sale === "yes" ? (
          <div id="clothing-grid-price-and-title">
            <p>{props.item.title}</p>
            <p className="new-price">{props.item.salePrice}</p>
            <p className="sale-price">{props.item.price}</p>
          </div>
        ) : (
          <div id="clothing-grid-price-and-title">
            <p>{props.item.title}</p>
            <p>{props.item.price}</p>
          </div>
        )}
      </div>
    </div>
  );
}

MenItems.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MenItems;
