import React, { Component } from "react";
import './style.css';

import {SubBlock} from "../../layout_components";
import PostRow from "./post_row";



class PostList extends Component {

    renderPost(item, i){
        return <PostRow 
            key= {i}
            post_id={item._id}
            author={item.post_author}
            title={item.post_title}
            content={item.post_content}
            date={item.updatedAt}
            reply_num={item.post_clicked}
        ></PostRow>
    }
    renderPostList(){
        var post_list = [];
        for(var i in this.props.posts){
            post_list.push(this.renderPost(this.props.posts[i],i));
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