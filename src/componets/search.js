import React, { useState, useEffect } from "react";
import data from "../clothingData.json";
import SearchItems from "./childComponents/searchItems";
import SidebarSearch from "./sidebarSearch";
import Navbar from "./navbar";
import { useLocation } from "react-router-dom";

function Search() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [womenItems, setWomenItems] = useState([]);
  const [menItems, setMenItems] = useState([]);
  const [item, setItems] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");

  useEffect(() => {
    setSelectedFilter("all");
  }, [searchTerm]);

  useEffect(() => {
    if (selectedFilter === "men") {
      const menItems = data.men;
      const menAccesories = data.accessories.filter(
        (item) => item.gender === "men"
      );
      const allMenItems = menAccesories.concat(menItems);
      const filteredMenItems = allMenItems.filter((item) =>
        item.description.some((desc) => desc === searchTerm)
      );
      setItems(filteredMenItems);
      setMenItems(filteredMenItems);
    } else if (selectedFilter === "women") {
      const womenItems = data.women;
      const womenAccesories = data.accessories.filter(
        (item) => item.gender === "women"
      );
      const allWomenItems = womenAccesories.concat(womenItems);
      const filteredWomenItems = allWomenItems.filter((item) =>
        item.description.some((desc) => desc === searchTerm)
      );
      setItems(filteredWomenItems);
      setWomenItems(filteredWomenItems);
    } else {
      const menItems = data.men;
      const menAccesories = data.accessories.filter(
        (item) => item.gender === "men"
      );
      const allMenItems = menAccesories.concat(menItems);
      const filteredMenItems = allMenItems.filter((item) =>
        item.description.some((desc) => desc === searchTerm)
      );
      setMenItems(filteredMenItems);
      const womenItems = data.women;
      const womenAccesories = data.accessories.filter(
        (item) => item.gender === "women"
      );
      const allWomenItems = womenAccesories.concat(womenItems);
      const filteredWomenItems = allWomenItems.filter((item) =>
        item.description.some((desc) => desc === searchTerm)
      );
      setWomenItems(filteredWomenItems);
      const allItems = filteredMenItems.concat(filteredWomenItems);

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
        {menItems.length > 0 || womenItems.length > 0 ? (
          <div className="products-container">
            <SidebarSearch
              onCategoryClick={handleCategoryClick}
              menLength={menItems.length}
              womenLength={womenItems.length}
            />
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
