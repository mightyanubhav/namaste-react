import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([])

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data1 = await fetch(SWIGGY_API);
    const json = await data1.json();

    console.log(json);
    // optional chaining.

    const arrayChange =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

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
