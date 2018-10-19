import React from "react";
import './style.css';

const HeaderBlock = (props)=> (
  <div className={props.className + " HeaderBlock"}style= {props.style} >
    { props.children }
  </div>
)

export default HeaderBlock;
