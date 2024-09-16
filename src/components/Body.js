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

    let [listOfRestaurants] = useState([
         {
            user: {
                 name: 'KFC',
                 age: 3.8,
                 id:'a'
             }
                
         },
         {
             user: {
                  name: 'Dominos',
                  age: 4.6,
                  id:'b'
              }
                 
         },
         {
              user: {
                   name: 'MCD',
                   age: 4.1,
                   id:'c'
               }
                  
         }

    ]);
    // normal js variable 
    // let listOfRestaurantsJS = [
        
    // ]
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={ () =>{
                    listOfRestaurants = listOfRestaurants.filter(
                        (res) => res.user.age > 4.0
                    );
                    console.log(listOfRestaurants);
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