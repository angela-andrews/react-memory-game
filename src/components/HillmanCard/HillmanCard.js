import React from "react";
// import hillman from "../../hillman.json"
import "./HillmanCard.css";

class HillmanCard extends React.Component {
    render() {
      return(
        <div className = "card">
        <div className = "img-container">
          <img src={this.props.image} alt={this.props.name} data-id={this.props.id}/>
        </div>
       </div>
      );
    };
  };

export default HillmanCard;
