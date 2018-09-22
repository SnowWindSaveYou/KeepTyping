/**
 * Container Block
 * the row block contains the main block and side block
 */
import React from "react";
import './style.css';

const ContainerBlock = (props)=> (
  <div className={props.className + " ContainerBlock"}style= {props.style} >
    { props.children }
    <div className="clearfix"/>
  </div>
)

export default ContainerBlock;