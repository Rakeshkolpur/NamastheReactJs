import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Filterdata.css"; // Import the external CSS file
import SheimUi from "./SheimUi";
import "./Searchbar.css";

const instance = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
});

const Filterdata = () => {
  const [newdata, setData] = useState([]); // Original data
  const [filteredData, setFilteredData] = useState([]); // Filtered data based on search
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await instance.get("filter.php?a=Alcoholic");
      setData(response.data.drinks);
      setFilteredData(response.data.drinks); // Initially, filtered data is the full list
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term); // Update the search term in state

    // Filter based on search term
    if (term === "") {
      // If search term is empty, reset to full list
      setFilteredData(newdata);
    } else {
      // Otherwise, filter by matching strDrink
      const searchFilter = newdata.filter((drink) =>
        drink.strDrink.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredData(searchFilter);
    }
  };

  if (newdata.length === 0) {
    return <SheimUi />; // Show a UI element when there's no data
  }
  const searchhandle = () => {
    const searchFilter = newdata.filter((drink) =>
      drink.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(searchFilter); // Update filteredData with the search results
  };
  return (
    <div>
      <div className="search-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search For Drink..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)} // Automatically search as you type
          />
          <button onClick={searchhandle}>Search</button>
        </div>
      </div>
      <div className="container">
        <ul className="drink-list">
          {filteredData.map((eachItem) => {
            const { strDrink, strDrinkThumb, idDrink } = eachItem;
            return (
              <li key={idDrink} className="drink-item">
                <img src={strDrinkThumb} alt={strDrink} className="drink-img" />
                <h4>{strDrink}</h4>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Filterdata;
