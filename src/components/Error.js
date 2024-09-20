import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1> This is error componenet </h1>
            <p1> {err.status} </p1>
        </div>
    );
}

export default Error