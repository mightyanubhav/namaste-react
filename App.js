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

const  RestaurantCard = (props) =>{
    const {change} = props;
   
    return (
        <div className="res-card">
            <div className="img-container">
                <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/d6cc715e5180e7b29674f22383118cc6"
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

const config = [
    {
        user: {
          name: 'Bob',
          age: 35,
          id:'a'
        },
        settings: [
          'blue',
          'fr',
        ]
      },
      {
        user: {
          name: 'marlin',
          age: 30,
          id:'b'
        },
        settings: [
          'blue',
          'fr',
        ]
      },
      {
        user: {
          name: 'Bob',
          age: 35,
          id:'c'
        },
        settings: [
          'blue',
          'fr'
        ]
      },
      {
        user: {
          name: 'Bob',
          age: 35,
          id:'d'
        },
        settings: [
          'blue',
          'fr'
        ]
      },
      {
        user: {
          name: 'Bob',
          age: 35,
          id:'e'
        },
        settings: [
          'blue',
          'fr'
        ]
      }
];
  


const Body = () =>{
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">  
                {
                    config.map((val_in_array, index) => <RestaurantCard key={index} change={val_in_array}/>)
                    // key should not be used as index as a key not recommended
                    // not using keys is not acceptable , if there is not an option , then use index
                }
                {/* <RestaurantCard
                    config = {config}
                /> */}
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