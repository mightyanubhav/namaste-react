import React from "react";
import ReactDOM from "react-dom/client";



const LeftLogo = () =>{
    return <div id="container1">
        <img src="https://play-lh.googleusercontent.com/pfvYf8MWEUgO4Ip9W5iUkyCMo7JH_Fhu1f7YMK6mb7Olw_xzacJOe1XwtPXDE04GaA" alt="no image"></img>
    </div>
}
const SearchBar = () =>{
    return <div id="search">
        <input type="text" placeholder="Search.."></input>
    </div>
}
const UserIcon = ()=>{
    return <div id="container2">
        <img src="https://avatars.githubusercontent.com/u/12824231?v=4" alt=""></img>
    </div>
}
const ComponentInsideComponent = () =>{
    return (
        <div id="top">
            <LeftLogo/>
            <SearchBar/>
            <UserIcon/>
        </div>
    );
}

const ReactHeader = () =>{
    return  <ComponentInsideComponent/>;
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ReactHeader/>);