/**
 * Top Block
 * the block contain a row at the top
 */

import React from "react";
import './style.css';

const TopBlock = (props)=> (
  <div className={props.className + " TopBlock"}style= {props.style} >
    { props.children }
  </div>
)

export default TopBlock;
