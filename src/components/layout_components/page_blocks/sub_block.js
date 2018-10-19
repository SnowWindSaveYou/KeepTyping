/**
 * Sub Block
 */

import React from "react";
import './style.css';


const SubBlock = (props)=> {
    var {className, ...other} = props;
    return(
        <div className={className + " SubBlock"} {...other}>
            { props.children }
        </div>
    )
}

export default SubBlock;
