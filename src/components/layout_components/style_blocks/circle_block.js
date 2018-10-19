import React from "react";
/**
 * Display a circle block from given radius.
 * @param {radius} props : Radius of the circle
 */
const CircleBlock = props => (
  <div
    className={props.className + " CircleBlock"}
    {...props}
    radiu={props.radiu}
    style={{
      width: props.radiu * 2 + "px",
      height: props.radiu * 2 + "px",
      borderRadius: props.radiu + "px",
      overflow: "hidden",
      ...props.style
    }}
  >
    {props.children}
  </div>
);

export default CircleBlock;
