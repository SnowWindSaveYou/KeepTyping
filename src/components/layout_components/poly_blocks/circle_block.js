import React from "react";
// import './style.css';

const CircleBlock = (props)=> (
    <div className={props.className + " CircleBlock"} style= {props.style} 
        radiu={props.radiu}
        style={{
            width: (props.radiu*2)+"px",
            height: (props.radiu*2)+"px",
            borderRadius: (props.radiu)+"px",
            background:props.background ?props.background:"#FFF"
        }}
        key={props.key}
        onClick={props.onClick? ()=>props.onClick():null}
        onMouseOver={props.onMouseOver?props.onMouseOver:null }
        onMouseLeave={props.onMouseLeave ?props.onMouseLeave:null}>

    { props.children }
  </div>
)

export default CircleBlock;