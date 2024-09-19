import { CDN_URL } from "../utils/constants";
import { FOOD_IMG } from "../utils/constants";
const  RestaurantCard = (props) =>{
    const { change } = props;
    const { name, avgRating, cuisines, locality } = change.info;

    return (
        <div className="res-card">
            <div className="img-container">
                <img
                    src={`${FOOD_IMG}${change.info.cloudinaryImageId}`}
                    alt="Food item"
                />
            </div>
            <div className="text-container">
                <h3>{name}</h3> {/* Name */}
                <h4>{avgRating} ★</h4> {/* Rating */}
                <p>{cuisines.join(", ")}</p> {/* Cuisines */}
                <h4>{locality}</h4> {/* Location */}
            </div>
        </div>
    );

}

export default RestaurantCard;