import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);

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
  };
  //conditional rendering
  // if(listOfRestaurants.length === 0){
  //     return <Shimmer />
  // }
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
              //filter the restaurant cards and update ui.
              //search text
            //   console.log(searchText);
            //   console.log(listOfRestaurants);
              const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.includes(searchText));
            //   console.log(filteredRestaurant);
              setListOfRestaurants(filteredRestaurant);
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
            setListOfRestaurants(filteredList);
          }}
        >
          {" "}
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((x) => (
          <RestaurantCard key={x.info.id} change={x} />
        ))}
      </div>
    </div>
  );
};
export default Body;
