import React, { useState, useEffect } from "react";
import MenItems from "./childComponents/menItems";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import data from "../clothingData.json";

function Mens() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const mensItems = data.men.filter((item) => item.gender === "men");
    setItems(mensItems);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="products-view">
        <div className="products-container">
          <Sidebar />
          <div id="clothing-items-grid">
            {items.map((item) => (
              <MenItems key={item.title} title={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mens;
