/**
 * Sub Block
 */

import React from "react";
import './style.css';

const SubBlock = (props)=> (
    <div className={props.className + " SubBlock"} style= {props.style} 
        key={props.key}
        onClick={props.onClick? ()=>props.onClick():null}
        onMouseOver={props.onMouseOver?props.onMouseOver:null }
        onMouseLeave={props.onMouseLeave ?props.onMouseLeave:null}>
    { props.children }
  </div>
)

export default SubBlock;
