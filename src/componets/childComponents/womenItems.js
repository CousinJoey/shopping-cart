import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function WomenItems(props) {
  let navigate = useNavigate();

  const handleClick = () => {
    let article = props.item;
    const state = { article };

    navigate(`/product/${props.item.id}`, { state });
  };

  return (
    <div id="womens-clothing-grid">
      <img
        src={props.item.icon}
        alt={props.item.title}
        style={{ width: "300px", height: "450px" }}
        onClick={handleClick}
      />
      <p>{props.item.title}</p>
      <p>{props.item.price}</p>
    </div>
  );
}

WomenItems.propTypes = {
  item: PropTypes.object.isRequired,
};

export default WomenItems;
