import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = (
    <h1 id="heading"> 
        Nameste React using jsx
    </h1>
) ;
console.log(jsxHeading);

const JsxHeading = () => <h1>Hello brother</h1>



// React Component 

const HeadingComponent = () => {
return(
        <div className="first">
            <h1 className="heading"> Nameste React functional Component</h1>
            <h1 className="heading"> Nameste React functional Component</h1>
            <h1 className="heading"> Nameste React functional Component</h1>     
        </div>
        
    )
};
const HeadingComponent2 = () => <h1>Again react functional Component</h1>;
const HeadingComponent3 = () => true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JsxHeading></JsxHeading>);
