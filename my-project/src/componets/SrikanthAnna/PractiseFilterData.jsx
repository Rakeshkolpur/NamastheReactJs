import React, { useState, useEffect } from "react";
import "./practice.css";
import axios from "axios";
const instance = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
});

const PractiseFilterData = () => {
  const [data, setData] = useState([]);
  const [filterdata, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await instance.get("filter.php?a=Alcoholic");
      setData(response.data.drinks);
      setFilteredData(response.data.drinks);
    } catch (error) {
      console.log("fetching data error", error);
    }
  };
  const changehandelr = (term) => {
    setSearchTerm(term);
    // fiter data
    if (term === "") {
      setFilteredData(data);
    } else {
      const serchfiterdata = data.filter((drink) => {
        return drink.strDrink.toLowerCase().includes(term.toLowerCase());
      });
      setFilteredData(serchfiterdata);
    }
  }
  return (
    <div>
      <div className="inputSearch">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => changehandelr(e.target.value)}
          className="inputclass"
        />

        <button type="submit">Search</button>
      </div>

      {/* data showing here i mean featchin data map */}
      {filterdata.length === 0 ? (
        <p>No data found</p>
      ) : (
        <ul className="listItems">
          {filterdata.map((eachItem) => {
            const { strDrink, strDrinkThumb, idDrink } = eachItem;
            return (
              <li key={idDrink}>
                <img src={strDrinkThumb} alt="imagehere" />
                <h3>{strDrink}</h3>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PractiseFilterData;
