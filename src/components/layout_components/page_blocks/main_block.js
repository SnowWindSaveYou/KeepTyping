/**
 * Main Block
 * the block put main things of page
 */
import React from "react";
import './style.css';

const MainBlock = (props)=> (
  <div className={props.className + " MainBlock"}style= {props.style} >
    { props.children }
  </div>
)
export default MainBlock;