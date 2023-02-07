import React from "react";

function input(){
    return(
        <div className="ip">
            <textarea placeholder="Enter the title" className="first-ip" />
            <textarea placeholder="Enter the description" className="second-ip" />
            <button className="plus"><h4>+</h4></button>
        </div>
    )
}

export default input;