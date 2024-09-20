import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [button, setButton] = useState("Login");
  console.log("header renders");

  useEffect(()=>{
    console.log("Use effect called");
  },[]);


  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
           <Link to={"/"}>Home</Link>
          </li>
          <li> 
            <a href="/about">About us</a>
          </li>
          <li>
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              button === "Login" ? setButton("Logout") : setButton("Login");
            }}
          >
            {" "}
            {button}{" "}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
