https://mightyanubhav.github.io/namaste-react/
if the site is not working, it may because of api key expire , that is bypassing cors.
or swiggy api change 
# nameste react
<img width="1470" alt="Screenshot 2024-09-20 at 1 51 08 AM" src="https://github.com/user-attachments/assets/6687acce-e53e-4234-aad1-2ce618f4aca0">

# parcel : 
	1) Dev Build
	2) Local Server
	3) HMR : hot module replacement reads file and refreshes browser
	4) Uses file watching algo + in c++
	5) cashing - causing faster build
	6) image optimization 
	7) minify our file , for production project( Bundeling)
	8) consistent hashing
	9) Differential bunderling
    10) Diagnostics
    11) error handeling
	

    // state variable : - super poweful variable ,
    // for that we use hooks, Intro to hooks, to create that state variable.
    // hook is normal js function given to us by react, it is prebuild, logic is written already , multiple function s 
    // are hook functions.
    // it is the syntax, it is just like using let listOfRestaurant = [] , but we use it let [listOfRestaurant] = useState( <default value of array >);
    // let [listOfRestaurants] = useState([]);
    // to change this special variable we can't by normally , we need to pass arguement like let [listOfRestaurant, setListOfRestaurant]
    // to update this we will use setListOfRestaurant


	 // now adding config data into useState.
    // normal js variable 
    // let listOfRestaurantsJS = [
        
    // ]



	   // listOfRestaurants = listOfRestaurants.filter(
                    //     (res) => res.user.age > 4.0
                    // );
                    // console.log(listOfRestaurants);


current body ;


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
