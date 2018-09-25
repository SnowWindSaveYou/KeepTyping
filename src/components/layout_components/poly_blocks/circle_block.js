import React from "react";

const CircleBlock = (props)=> (
    <div className={props.className + " CircleBlock"} 
        {...props}
        radiu={props.radiu}
        style={{
            width: (props.radiu*2)+"px",
            height: (props.radiu*2)+"px",
            borderRadius: (props.radiu)+"px",
            overflow:"hidden",
            ...props.style
        }}>

    { props.children }
  </div>
)

export default CircleBlock;