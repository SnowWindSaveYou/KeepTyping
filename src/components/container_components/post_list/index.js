import React, { Component } from "react";
import './style.css';
import axios from 'axios';
import SubBlock from "../../layout_components/sub_block";
import PostRow from "./post_row";
class PostList extends Component {

    constructor(props){
      super(props);
        this.state = {
            postData:{},
            style:this.props.style ? null: {
            }
      }
    }
    componentDidMount(){
        let that = this;
        axios.get('/api/m/topic/posts/'+this.props.topic)
        .then(function(res){
            console.log(res.data);
            that.setState({postData:res.data})

        }).catch(function(err){
            console.log(err);
        })
    }

    renderPost(item, i){
        return <PostRow 
            key= {i}
            postId={item._id}
            author={item.post_author}
            title={item.post_title}
            content={item.post_content}
            date={item.updatedAt}
            //TODO: change it
            replyNum={item.post_clicked}
        ></PostRow>
    }
    renderPostList(){
        var post_list = [];
        for(var i in this.state.postData){
            post_list.push(this.renderPost(this.state.postData[i],i));
        }
        
        return post_list;
    }
    render() {
      return (
        <SubBlock className="PostList" style={this.state.style}>
            {this.renderPostList()}  
        </SubBlock>
      );
    }
  }
export default PostList;