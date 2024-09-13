import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/burger-logo-design-template-8f3596992e540bb9078f91f59f745ce2_screen.jpg?ts=1653317642"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const  RestaurantCard = () =>{
    return (
        <div className="res-card">
            <div className="img-container">
                <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/d6cc715e5180e7b29674f22383118cc6"
                alt="no image" />
            </div>
            <div className="text-container">
                <h3> Meghana Foods </h3>
            </div>
        </div>
    );
}

const Body = () =>{
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">  
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                
            </div>
        </div>
    );
}
const AppLayout = () =>{
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);