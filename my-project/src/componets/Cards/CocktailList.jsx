import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cards.css';

const CocktailList = ({ searchTerm, category }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCocktails = async () => {
      setLoading(true);
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass`;
        const response = await axios.get(url);
        const filteredCocktails = response.data.drinks.filter(drink =>
          drink.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setCocktails(filteredCocktails);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCocktails();
  }, [searchTerm, category]); // Refetch data when searchTerm or category changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="cocktail-grid">
      {cocktails.map((cocktail) => (
        <div className="cocktail-card" key={cocktail.idDrink}>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="cocktail-image" />
          <h3 className="cocktail-name">{cocktail.strDrink}</h3>
        </div>
      ))}
    </div>
  );
};

export default CocktailList;
