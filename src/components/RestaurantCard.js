import { CDN_URL } from "../utils/constants";

const  RestaurantCard = (props) =>{
    const {change} = props;
   
    return (
        <div className="res-card">
            <div className="img-container">
                <img
                src= { CDN_URL}
                alt="no image" />
            </div>
            <div className="text-container">
                <h3> {change.user.name}</h3>
                <h4>Data wata</h4>
                <h4>{change.user.age} </h4>
            </div>
        </div>
    );
}

export default RestaurantCard;