/**
 * Top Block
 * the block contain a row at the top
 */

import React  from "react";
import './style.css';

const FooterBlock = (props)=> (
  <div className={props.className + " FooterBlock"}style= {props.style} >
    { props.children }
  </div>
)
export default FooterBlock;
