import React, { Component } from "react";
import './style.css';
import {SubBlock} from "../../../layout_components";

class PostRow extends Component {
    constructor(props){
        super(props);
        this.state={
            post_id: this.props.postId,
            author: this.props.author,
            title:this.props.title,
            content:this.props.content,
            date:this.props.date,
            reply_num:this.props.replyNum,
            style:{backgroundColor:"#fff"}
        }
    }
    handlerHover(){
        this.setState({style:{backgroundColor:"#fbfbfb"}});
    }
    handlerHoverOut(){
        this.setState({style:{backgroundColor:"#fff"}})
    }
    handlerOnClick(){
        console.log('click:',this.state.post_id)
    }
    render(){
        return (
            <SubBlock className="PostRow" key={this.state.postId} 
                onClick={()=>this.handlerOnClick()}
                onMouseOver={this.handlerHover.bind(this)}
                onMouseLeave={this.handlerHoverOut.bind(this)}
                style={this.state.style}>
                <div className="left">
                    {/* TODO: reset the connection to post by post id */}
                    <a className="title" href='/post/demo'>
                        <span className="reply_num">{this.state.reply_num}</span>
                        {this.state.title}</a>
                    <div className="content">{this.state.content}</div>
                </div>
                <div className="right">
                    <a className="author">{this.state.author}</a>
                    <p className="date">{this.state.date}</p>
                </div>
            </SubBlock>
        );
    }
}

export default PostRow;