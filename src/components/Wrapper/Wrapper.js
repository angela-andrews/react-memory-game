import React from "react";
import "./Wrapper.css";

const Wrapper = props => 
<React.Fragment>
    
    <div className="wrapper">
    {props.children}</div>;
</React.Fragment>
export default Wrapper;
