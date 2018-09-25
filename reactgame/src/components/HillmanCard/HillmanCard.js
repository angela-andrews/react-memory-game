import React from "react";
import "./HillmanCard.css";

const HillmanCard = props =>(
<div className = "card">
    <div className = "img-container">
    
       
            <img src= {props.image} 
             alt= {props.name}
             data-id={props.id} 
            />
           
   
        
        
        

    </div>
</div>


);

export default HillmanCard;
