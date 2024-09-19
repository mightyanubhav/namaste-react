import RestaurantCard from "./RestaurantCard";
import config from "../utils/mockData";
import { useEffect, useState } from "react";

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
        const arrayChange = json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants;
        console.log(arrayChange.length);
        setListOfRestaurants(arrayChange);

    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={ () =>{

                    const filteredList = listOfRestaurants.filter(
                        (x) => x.info.avgRating > 4
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