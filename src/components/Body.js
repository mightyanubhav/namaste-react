import RestaurantCard from "./RestaurantCard";
import config from "../utils/mockData";



const Body = () =>{
    let listOfRestaurants = [
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
    ]
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