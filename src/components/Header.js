import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

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
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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
