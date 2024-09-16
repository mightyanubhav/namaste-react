import RestaurantCard from "./RestaurantCard";
import config from "../utils/mockData";



const Body = () =>{
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">  
                {
                    config.map((val_in_array) => <RestaurantCard key={val_in_array} change={val_in_array}/>)
                }
               
            </div>
        </div>
    );
}
export default Body;