import React from "react";
import {Link} from "react-router-dom"
import { CircleBlock } from "@layout";
import defaultHead from '@/asset/default_head.png'

const UserAvater = (props) => (
    
        <CircleBlock className={props.className+ " UserAvater"} 
            radiu={props.radiu||"35"} style={{ background: "#fff",...props.style }}>
            <Link to={"/u/"+props.uid}>
            <img style={{ width: "100%", height: "100%" }}
                src={props.src ? props.src : defaultHead}></img>
            </Link>
        </CircleBlock>
)

export default UserAvater;