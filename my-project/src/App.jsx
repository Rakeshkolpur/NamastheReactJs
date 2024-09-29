// eslint-disable-next-line no-unused-vars
import React from "react";
import Nabar from "./componets/heading/Nabar";
import Searchbar from "./componets/SearchBar/Searchbar";
import CocktailData from "./componets/Cards/CardsPractices/CocktailData";
import UseStateExample2 from "./componets/SrikanthAnna/UseStateExample2";
import UseStateExample3 from "./componets/SrikanthAnna/UseStateExample3";
import Filterdata from "./componets/Project/Filterdata";
import PractiseFilterData from "./componets/SrikanthAnna/PractiseFilterData";
import Datafilter from "./componets/SrikanthAnna/Datafilter";
import Filterdatafetching from "./componets/NamastheReact/Filterdatafetching";
// import MainContainer from './componets/Cards/MainContainer';

const App = () => {
  
  return (
    <div>
      <Nabar/>
      {/* <Searchbar/> */}
      {/* <MainContainer/> */}
      {/* <CocktailData/>
      <UseStateExample2/>
      <UseStateExample3/> */}
      {/* <Filterdata/> */}
      {/* <PractiseFilterData/> */}
      {/* <Datafilter/> */}
      <Filterdatafetching />
    </div>
  );
};

export default App;
