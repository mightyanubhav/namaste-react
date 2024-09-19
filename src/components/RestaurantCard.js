import { CDN_URL } from "../utils/constants";
import { FOOD_IMG } from "../utils/constants";
const  RestaurantCard = (props) =>{
    const { change } = props;
   
    return (
        <div className="res-card">
            <div className="img-container">
                <img
                src= {FOOD_IMG + change.info.cloudinaryImageId}
                alt="no image" />
            </div>
            <div className="text-container">
                <h3> {change.info.name}</h3>
                <h4>{change.info.avgRating} Stars</h4>
                <p> {change.info.cuisines.join(",")}</p>
                <h4> {change.info.locality}</h4>
            </div>
        </div>
    );
}

export default RestaurantCard;