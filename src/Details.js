import React from "react";

const Details=(props)=>{
    return(
        <div className="container">
            <div className="card">
                <h3>{props.fn}</h3>
                <h3>{props.ln}</h3>
                <h3>{props.em}</h3>
                <h3>{props.su}</h3>
            </div>
        </div>
    )
}
export default Details;