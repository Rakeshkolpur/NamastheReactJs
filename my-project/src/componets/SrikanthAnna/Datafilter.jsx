import React, { useState } from "react";
import axios from "axios";
import "./datafilter.css" // Make sure to import your CSS file

const Datafilter = () => {
  const [drinks, setDrinks] = React.useState([]);
  const [searchTerm,setSearchTerm]=useState('');
  const [filterdata,setFilteredData]=useState([]);
  const fetchdata = async () => {
    try {
      const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka");
      setDrinks(response.data.drinks);
      setFilteredData(response.data.drinks)
    } catch (error) {
      console.log("Data Error not found", error);
    }
  };

  React.useEffect(() => {
    fetchdata();
  }, []);

  const changeHadleer = (term) => {
    setSearchTerm(term);
    const searchdatafilter = drinks.filter((drink) => {
      return drink.strDrink.toLowerCase().includes(term.toLowerCase());
    });
    setFilteredData(searchdatafilter);
  };
  
  return (
    <div>
      <div className="inputSearch">
        <input type="text" placeholder="Search...." className="inputclass" 
        value={searchTerm}
        onChange={(e)=>changeHadleer(e.target.value)} />
        <button type="submit">Search</button>
      </div>
      {drinks.length === 0 ? (
        <h1>No data Found</h1>
      ) : (
        <ul className="drink-list">
          {filterdata.map((eachItem) => {
            const { idDrink, strDrink, strDrinkThumb } = eachItem;
            return (
              <li key={idDrink} className="drink-item">
                <img src={strDrinkThumb} alt={strDrink} className="drink-image" />
                <div className="drink-name">{strDrink}</div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Datafilter;
