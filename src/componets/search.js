import React, { useState, useEffect } from "react";
import data from "../clothingData.json";
import SearchItems from "./childComponents/searchItems";
import SidebarSearch from "./sidebarSearch";
import Navbar from "./navbar";
import { useLocation } from "react-router-dom";

function Search() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [item, setItems] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");

  useEffect(() => {
    setSelectedFilter("all");
  }, [searchTerm]);

  useEffect(() => {
    if (selectedFilter === "men") {
      const menItems = data.men.filter((item) =>
        item.description.some((desc) => desc === searchTerm)
      );
      setItems(menItems);
    } else if (selectedFilter === "women") {
      const womenItems = data.women.filter((item) =>
        item.description.some((desc) => desc === searchTerm)
      );
      setItems(womenItems);
    } else {
      const menItems = data.men.filter((item) =>
        item.description.some((desc) => desc == searchTerm)
      );
      const womenItems = data.women.filter((item) =>
        item.description.some((desc) => desc === searchTerm)
      );
      const allItems = womenItems.concat(menItems);
      const finalItems = allItems.filter(
        (item) => item.gender === "women" || item.gender === "men"
      );

      setItems(finalItems);
    }
  }, [selectedFilter, searchTerm]);

  const handleCategoryClick = (category) => {
    setSelectedFilter(category);
  };

  return (
    <div>
      <Navbar />
      <div className="products-view">
        {item.length > 0 ? (
          <div className="products-container">
            <SidebarSearch onCategoryClick={handleCategoryClick} />
            <div id="clothing-items-grid">
              {item.map((item) => (
                <SearchItems key={item.title} title={item.title} item={item} />
              ))}
            </div>
          </div>
        ) : (
          <div className="no-results">
            <p className="no-results-text">
              No results for <span className="underline">{searchTerm}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
