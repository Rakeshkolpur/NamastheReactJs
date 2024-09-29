import axios from "axios";
 export const Instance = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/',
});