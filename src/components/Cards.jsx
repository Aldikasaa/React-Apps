import React from "react";


export default function Card(props) {
    console.log(props.item)
    let badgeText;
    if(props.openSpots===0){
        badgeText==='Sold Out'
    }
    else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            <img src={`./images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
              <p>{props.item.price}</p>
              <p>{props.item.location}</p>
              <p>{props.item.OpenSpots}</p>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    );
}
