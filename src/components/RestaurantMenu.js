import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () =>{

    const [resInfo, setResInfo] = useState([]);
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu =async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.14860&lng=85.89730&restaurantId=412717&catalog_qa=undefined&submitAction=ENTER"
        )
        const json = await data.json();
        console.log(json);
        let valArr = (json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info);
        console.log(valArr)
        setResInfo(valArr);
    }
    
    const {name, category,description} = resInfo;

    return (resInfo === null)? (
        <Shimmer/> 
    ) : (
        
        <div className="menu">
            <h1>{name}</h1>
            <h2>{category}</h2>
            <p>{description}</p>
            
        </div>
    );
}
export default RestaurantMenu;