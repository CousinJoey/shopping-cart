import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function MenItems(props) {
  let navigate = useNavigate();

  const handleClick = () => {
    let article = props.item;
    const state = { article };

    navigate(`/product/${props.item.id}`, { state });
  };

  return (
    <div id="mens-clothing-grid">
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
            <p className="sale-price">{props.item.price}</p>
            <p>{props.item.salePrice}</p>
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
