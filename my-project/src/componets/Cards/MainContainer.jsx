// MainContainer.js
import React, { useState } from 'react';
import Searchbar from '../SearchBar/Searchbar';
import CocktailList from '../Cards/CocktailList'; // Adjust the path if necessary

const MainContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = (term, category) => {
    setSearchTerm(tesdrm);
    setCategory(catesdgory);
  };
  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <div>
      
      <Searchbar onSearch={handleSearch} onCategoryChange={handleCategoryChange} />
      <CocktailList searchTerm={searchTerm} category={category} />
    </div>
  );
};

export default MainContainer;
