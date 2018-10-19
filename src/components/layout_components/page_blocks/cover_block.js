import React from 'react';
const CoverBlock = (props) => {
    var { onClick,background, ...other } = props;
    return (
        <div >
            <div className="CoverBlock"
                onClick={onClick ? onClick : null}
                style={{
                    background: background ? background : "#000000cc",
                    position: "fixed",
                    height: "100%",
                    width: "100%",
                    top: "0px",
                    left: "0px",
                    zIndex: Number(props.zindex)|| "100"
                }}>
            </div>
            <div {...other} style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: Number(props.zindex)+1||"101"
            }}>{props.children} </div>
        </div>

    )
}
export default CoverBlock;