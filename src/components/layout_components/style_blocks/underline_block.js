import React from "react";
/**
 * A block with an underline.
 * @param {} props
 */
const UnderLineBlock = props => {
  var { style, ...other } = props;
  return (
    <div
      className={props.className + " auto_width UnderLineBlock"}
      style={{
        position: "relative",
        textAlign: "center",
        display: "inline-block",
        ...props.style
      }}
      {...other}
    >
      {props.children}
      <div
        style={{
          position: "absolute",
          zIndex: "9px",
          background: props.underlinecolor,
          height: props.underlineheight || "2px",
          width: "100%"
        }}
      />
    </div>
  );
};

export default UnderLineBlock;
