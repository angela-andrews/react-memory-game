import React from "react";
import "./Nav.css";

const Nav = props => (
    <React.Fragment>
    {/* <nav classNameName="navbar navbar-light navstyle"> */}
    <ul className="nav  navstyle justify-content-end">
 
  <li className="nav-item spacer">
    <a className="nav-link" >Score: {props.score}</a>
  </li>
  <li className="nav-item spacer">
    <a className="nav-link disabled" >Top Score: {props.topScore}</a>
  </li>
</ul>

    </React.Fragment>

);

export default Nav;