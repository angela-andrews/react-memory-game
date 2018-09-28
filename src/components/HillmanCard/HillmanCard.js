import React from "react";
// import hillman from "../../hillman.json"
import "./HillmanCard.css";

const HillmanCard = props => (
  
        <div className = "card">
        <div className = "img-container" 
            value = {props.key} 
            onClick={() => props.handleClick(props.id)}
            >
          <img src={props.image} alt={props.name} data-id={props.id}/>
        </div>
       </div>
      );
   
  

export default HillmanCard;
