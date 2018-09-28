import React from "react";
import logo from './logo.svg';

const Footer = ()=>(
    <footer className="footer bg-dark">
        <div className="container">
            <img src={logo} className="App-logo" alt="logo" />
              <span className="text-muted">My First React App</span>
        </div>
    </footer>

)        
export default Footer;