import RestaurantCard from "./RestaurantCard";
import config from "../utils/mockData";
import { useEffect, useState } from "react";



const Body = () =>{


    let [listOfRestaurants, setListOfRestaurants] = useState(config);
    
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page type=DESKTOP WEB LISTING"
        );
        const json = await data.json();
        console.log(json);
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={ () =>{

                    const filteredList = listOfRestaurants.filter(
                        (res) => res.user.age > 4
                    );
                    setListOfRestaurants(filteredList)

                 
                }}> Top Rated Restaurant</button>
            </div>
            <div className="res-container">  
                {
                    listOfRestaurants.map((val_in_array) => <RestaurantCard key={val_in_array.user.id} change={val_in_array}/>)
                }
               
            </div>
        </div>
    );
}
export default Body;