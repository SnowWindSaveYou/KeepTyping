import React, { Component } from "react";
import './style.css';

import {SubBlock} from "../../layout_components";
import PostRow from "./post_row";



class PostList extends Component {

    renderPost(item, i){
        return <PostRow 
            key= {i}
            post_id={item._id}
            author={item.post_author[0]}
            title={item.post_title}
            content={item.post_content}
            date={item.updatedAt}
            reply_num={item.post_reply_count}
        ></PostRow>
    }
    renderPostList(){
        var post_list = [];
        for(var i in this.props.posts){
            post_list.push(this.renderPost(this.props.posts[i],i));
        }
        if(post_list.length===0){
            return(
                <SubBlock style={{background:global.theme.base_color,
                                    color:global.theme.font_color,
                                    padding:"20px",
                                    textAlign:"center",
                                    height:"120px"}}>
                    There is No Post (oﾟ▽ﾟ)o
                </SubBlock>
            )
        }
        return post_list;
    }
    render() {
      return (
        <SubBlock className="PostList" {...this.props}>
            {this.renderPostList()}  
        </SubBlock>
      );
    }
  }
export default PostList;