import React from "react";
import './style.css';
import { SubBlock} from "@/components/layout_components";

const PostInfo = (props) => (
  <SubBlock className={props.className+ " PostInfo"} style={props.style} >
    <div className="middle inner">
      <div className="follow_info pair_row">
        <div className="pair_part">
          {props.post.post_clicked}<br />
          See
        </div >
        <div className="pair_part">
          {props.post.post_follower_num}<br />
          Collect
        </div >
      </div>
    </div>
    <div className="bottom inner">
      {props.children}
    </div>
  </SubBlock>
)
export default PostInfo;