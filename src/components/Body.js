import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";

const Body = () =>{


    let [listOfRestaurants, setListOfRestaurants] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {

        const data1 = await fetch(SWIGGY_API);
        const json = await data1.json();
       
        console.log(json);
        // optional chaining.
       
        const arrayChange = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
       
        setListOfRestaurants(arrayChange);

    }
    if(listOfRestaurants.length === 0){
        return <Shimmer />
    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={ () =>{

                    const filteredList = listOfRestaurants.filter(
                        (x) => x.info.avgRating > 4.5
                    );
                    setListOfRestaurants(filteredList)

                 
                }}> Top Rated Restaurant</button>
            </div>
            <div className="res-container">  
                {
                    listOfRestaurants.map((x) => <RestaurantCard key={x.info.id} change={x}/>)
                }
               
            </div>
        </div>
    );
}
export default Body;