import axios from "axios";
import React, { useEffect, useState } from "react";

const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const FilterDataFetching = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const restaurants = response.data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setData(restaurants);
      console.log(restaurants);
      setFilteredData(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    if (term === "") {
      setFilteredData(data);
      setNoDataFound(false);
    } else {
      const filtered = data.filter((item) =>
        item.info.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredData(filtered);
      setNoDataFound(filtered.length === 0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="justify-center flex py-6 bg-gray-600">
        <input
          type="text"
          placeholder="  Search...."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="rounded-l-[5px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 rounded-l-[0] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-[5px] transition duration-300 ease-in-out">
          Search
        </button>
      </div>

      {loading ? (
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-8 border-blue-500 mb-4"></div>
          <h2>Please wait...</h2>
        </div>
      ) : noDataFound ? (
        <h2 className="justify-center font-bold text-red-700 text-2xl flex">No Data Found</h2>
      ) : (
        <div className="container mx-auto py-10 px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredData.map((item) => {
              const { info } = item;
              const { id, name, cuisines, avgRating, cloudinaryImageId, sla } = info;
              const deliveryTime = sla?.slaString;

              return (
                <div key={id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <img src={`${CDN_URL}${cloudinaryImageId}`} alt={name} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h2 className="font-bold text-lg text-gray-800">{name}</h2>
                    <div className="mt-2">
                      <span className="bg-green-500 font-bold text-white py-1 px-3 rounded-full text-xs">{avgRating} ★</span>
                      <span className="ml-2 font-bold">{deliveryTime}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{cuisines.join(", ")}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDataFetching;
