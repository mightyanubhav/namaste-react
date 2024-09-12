import React from "react";
import ReactDOM from "react-dom/client";

// const jsxHeading = (
//     <h1 id="heading"> 
//         Nameste React using jsx
//     </h1>
// ) ;
// console.log(jsxHeading);

// const JsxHeading = () => <h1>Hello brother</h1>



// // React Component 

// const HeadingComponent = () => {
// return(
//         <div className="first">
//             <h1 className="heading"> Nameste React functional Component</h1>
//             <h1 className="heading"> Nameste React functional Component</h1>
//             <h1 className="heading"> Nameste React functional Component</h1>     
//         </div>
        
//     )
// };
// const HeadingComponent2 = () => <h1>Again react functional Component</h1>;
// const HeadingComponent3 = () => true;



const change = <h1 className="heading"> this is the jsx file</h1>;
const ReactComponent = () =>{
    return (
        <h1> inside ReactComponent</h1>
    );
}
const bigChange = (
    <div className = "name">
        <div className = "name">
            {change}
            <ReactComponent/>
        </div>
    </div>
);

const SmallComponent = () => <p>Henry Griffin loves louis griffin</p>;

const number = 10000;
const ReactComponent2 = function ()  {
    return (
        <div id="container">
            <ReactComponent/>
            <ReactComponent></ReactComponent>
            {ReactComponent()}
            <h1> This is my file </h1>
            <SmallComponent/>
        </div>

    )
}
;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponent2/>);

