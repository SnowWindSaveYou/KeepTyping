import React from "react";

const CircleBlock = (props)=> (
    <div className={props.className + " CircleBlock"} style= {props.style} 
        radiu={props.radiu}
        style={{
            width: (props.radiu*2)+"px",
            height: (props.radiu*2)+"px",
            borderRadius: (props.radiu)+"px",
            background:props.background ?props.background:"#FFF",
            overflow:"hidden"
        }}
        key={props.key}
        onClick={props.onClick? ()=>props.onClick():null}
        onMouseOver={props.onMouseOver?props.onMouseOver:null }
        onMouseLeave={props.onMouseLeave ?props.onMouseLeave:null}>

    { props.children }
  </div>
)

export default CircleBlock;