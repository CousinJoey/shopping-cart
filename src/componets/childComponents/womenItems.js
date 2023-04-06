import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiNewBox } from "@mdi/js";

function WomenItems(props) {
  let navigate = useNavigate();

  const handleClick = () => {
    let article = props.item;
    const state = { article };

    navigate(`/product/${props.item.id}`, { state });
  };

  return (
    <div id="womens-clothing-grid">
      {props.item.sale === "yes" ? (
        <div className="article-img-container">
          <img
            className="article-img"
            src={props.item.icon}
            alt={props.item.title}
            style={{ width: "300px", height: "450px" }}
            onClick={handleClick}
          />
          <div className="red-overlay">
            <p className="overlay-text">Sale</p>
          </div>
        </div>
      ) : props.item.new === "yes" ? (
        <div className="article-img-container-new">
          <img
            className="article-img-new"
            src={props.item.icon}
            alt={props.item.title}
            style={{ width: "300px", height: "450px" }}
            onClick={handleClick}
          />
          <Icon path={mdiNewBox} size={2} className="new-overlay" />
        </div>
      ) : (
        <div>
          <img
            src={props.item.icon}
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

WomenItems.propTypes = {
  item: PropTypes.object.isRequired,
};

export default WomenItems;
