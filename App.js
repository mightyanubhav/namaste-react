import React from "react";
import ReactDOM from "react-dom/client";

/**
 * 
 * <div id = "title"> 
 *      <h1> Anubhav Shukla </h1>
 *      <h2> Ankit Shukla </h2>
 *      <h3> Rekha Devi </h3>
 * </div>
 * 
 */


// const h1 = React.createElement("h1", null, "Anubhav Shukla");
// const h2 = React.createElement("h2", null, "Ankit Shukla");
// const h3 = React.createElement("h3", null, "Rekha Devi");


// const div = React.createElement("div", {id: "title"}, [h1, h2, h3]);

const jsxElement = (
    <div id="title">
        <h1>Anubhav Shukla</h1>
        <h2>Ankit Shukla</h2>
        <h3>Rekha Shukla</h3>
    </div>
);

const ReactComponent = () =>{
    return (
        <div id="title2">
            {jsxElement}
            <h1>Anubhav Shukla</h1>
            <h2>Ankit Shukla</h2>
            <h3>Rekha Shukla</h3>
        </div>
    );
}

const ReactComponent2 = () =>{
    return (
        <div id="title2">
            {jsxElement}
            <ReactComponent/>
            <h1>Anubhav Shukla</h1>
            <h2>Ankit Shukla</h2>
            <h3>Rekha Shukla</h3>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ReactComponent2 />);
