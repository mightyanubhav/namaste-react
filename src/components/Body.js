import RestaurantCard from "./RestaurantCard";
import config from "../utils/mockData";
import { useState } from "react";

const Body = () =>{

    // state variable : - super poweful variable ,
    // for that we use hooks, Intro to hooks, to create that state variable.
    // hook is normal js function given to us by react, it is prebuild, logic is written already , multiple function s 
    // are hook functions.
    // it is the syntax, it is just like using let listOfRestaurant = [] , but we use it let [listOfRestaurant] = useState( <default value of array >);
    // let [listOfRestaurants] = useState([]);
    // to change this special variable we can't by normally , we need to pass arguement like let [listOfRestaurant, setListOfRestaurant]
    // to update this we will use setListOfRestaurant

    let [listOfRestaurants, setListOfRestaurants] = useState(config);
    // now adding config data into useState.
    // normal js variable 
    // let listOfRestaurantsJS = [
        
    // ]
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={ () =>{

                    const filteredList = listOfRestaurants.filter(
                        (res) => res.user.age > 4
                    );
                    setListOfRestaurants(filteredList)

                    // listOfRestaurants = listOfRestaurants.filter(
                    //     (res) => res.user.age > 4.0
                    // );
                    // console.log(listOfRestaurants);
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