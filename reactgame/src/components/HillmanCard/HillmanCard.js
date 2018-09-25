import React from "react";
import hillman from "../../hillman.json"
import "./HillmanCard.css";

const HillmanCard = props =>(
<div className = "card">
    <div className = "img-container">
    
       
             <img src= {props.image} 
             alt= {props.name}
             data-id={props.id} 
            /> 
           
           {/* {hillman.map(character => (
              <img data-id={character.id}  alt={character.name}
               src={character.image}

               ></img>
            ))
            } */}
            
        
        
        

    </div>
</div>


);

export default HillmanCard;
