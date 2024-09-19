import RestaurantCard from "./RestaurantCard";
import config from "../utils/mockData";
import { useEffect, useState } from "react";



const Body = () =>{


    let [listOfRestaurants, setListOfRestaurants] = useState(config);
    
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data1 = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.14860&lng=85.89730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            
        );
        const json = await data1.json();
       
        console.log(json);
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