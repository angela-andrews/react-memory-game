import React from "react";

const Header = props=>(
 <header className="App-header">  
     <h1 className="App-title">{props.brand}</h1>
     <h2 className= "App-title">{props.title}</h2>
     <p className="App-intro">Click on a character only once...or you Lose</p>
 </header>
)        
export default Header;