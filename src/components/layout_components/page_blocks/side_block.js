/**
 * Side Bar Block
 * the block put the tools, extentions and user info
 */
import React from "react";
import './style.css';

const SideBlock = (props)=> (
  <div className={props.className + " SideBlock"}style= {props.style} >
    { props.children }
  </div>
)

export default SideBlock;