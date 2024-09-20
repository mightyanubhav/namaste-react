import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";
import config from "../utils/mockData";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([])

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // working with live data.
    const url = 
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.14860&lng=85.89730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
    const data1 = await fetch(url);
    const json = await data1.json();

    console.log(json);
    // optional chaining.

    const arrayChange = 
       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(arrayChange);
    setListOfRestaurants(arrayChange);
    setFilteredListOfRestaurants(arrayChange);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              
              setFilteredListOfRestaurants(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (x) => x.info.avgRating > 4.5
            );
            setFilteredListOfRestaurants(filteredList);
          }}
        >
          {" "}
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurants.map((x) => (
          <RestaurantCard key={x.info.id} change={x} />
        ))}
      </div>
    </div>
  );
};
export default Body;
